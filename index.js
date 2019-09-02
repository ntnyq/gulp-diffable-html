var through2 = require('through2').obj
var toDiffableHtml = require('diffable-html')

module.exports = function () {
  return through2(function (file, enc, cb) {
    if (file.isNull()) return cb(null, file)

    file.contents = Buffer.from(toDiffableHtml(file.contents.toString()))

    cb(null, file)
  })
}
