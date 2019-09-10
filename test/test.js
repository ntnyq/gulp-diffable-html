'use strict'

const fs = require('fs')
const expect = require('expect')
const through = require('through2')
const File = require('vinyl')
const format = require('..')

function toStream(contents) {
  let stream = through()
  stream.write(contents)
  return stream
}

const fakeFilePath = 'test/fixtures/index.html'
const expectedFilePath = 'test/expected/index.html'
const fakeFileContent = fs.readFileSync(fakeFilePath)
const fakeFile = new File({
  path: fakeFilePath,
  contents: fakeFileContent,
})
const expected = fs.readFileSync(expectedFilePath, 'utf8')

describe('gulp-diffable-html', () => {
  describe('file-contents - buffer', () => {
    it('Should ignore empty file', done => {
      let stream = format()
      stream.on('error', done)
      stream.on('data', file => {
        expect(file.isNull())
        done()
      })
      stream.write(new File({}))
    })

    it('Should format my HTML files as expected', done => {
      let stream = format()
      stream.on('error', done)
      stream.on('data', file => {
        expect(file)
        expect(file.isBuffer())
        expect(file.contents.toString()).toStrictEqual(expected)
        done()
      })
      stream.write(fakeFile)
    })

    it('Should works well when option verbose set', done => {
      let stream = format({ verbose: true })
      stream.on('error', done)
      stream.on('data', file => {
        expect(file)
        expect(file.isBuffer())
        expect(file.contents.toString()).toStrictEqual(expected)
        done()
      })
      stream.write(fakeFile)
    })
  })

  describe('file-contents - stream', () => {
    it('Should format my HTML files', done => {
      let fixture = new File({ contents: toStream(fakeFileContent) })
      let stream = format()
      stream.on('error', done)
      stream.on('data', file => {
        expect(file)
        expect(file.isStream())
        file.contents.on('data', data => {
          expect(data.toString()).toStrictEqual(expected)
          done()
        })
      })
      stream.write(fixture)
    })
  })
})
