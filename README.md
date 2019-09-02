# gulp-diffable-html

[![NPM VERSION](https://img.shields.io/npm/v/gulp-diffable-html.svg)](https://www.npmjs.com/package/gulp-diffable-html)
[![NPM DOWNLOADS](https://img.shields.io/npm/dm/gulp-diffable-html.svg)](https://www.npmjs.com/package/gulp-diffable-html)
[![LICENSE](https://img.shields.io/github/license/ntnyq/gulp-diffable-html.svg)](https://github.com/ntnyq/gulp-diffable-html/blob/master/LICENSE)

:beer: A simple gulp plugin for html formatting via diffable-html.

__gulp-diffable-html__ is based on [diffable-html](https://github.com/rayrutjes/diffable-html).

## Install

``` bash
$ npm install gulp-diffable-html --save-dev
# OR
$ yarn add gulp-diffable-html -D
```

## Setup

``` js
var gulp = require('gulp')
var diffableHtml = require('gulp-diffable-html')

function views () {
  return (
    gulp
      .src('views/**/*.html')
      .pipe(diffableHtml())
      .pipe(gulp.dest('dist'))
  )
}

exports.dev = gulp.series(views)
```

## Example

``` html
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>gulp-diffable-html</title></head><body><header><h1><span>I am h1 in header</span></h1></header><main><p><span>span</span><b>b</b><strong>strong</strong><em>em</em></p></main><footer><p><a href="https://github.com/ntnyq/gulp-diffable-html">gulp-diffable-html</a></p></footer></body></html>
```

result

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>
      gulp-diffable-html
    </title>
  </head>
  <body>
    <header>
      <h1>
        <span>
          I am h1 in header
        </span>
      </h1>
    </header>
    <main>
      <p>
        <span>
          span
        </span>
        <b>
          b
        </b>
        <strong>
          strong
        </strong>
        <em>
          em
        </em>
      </p>
    </main>
    <footer>
      <p>
        <a href="https://github.com/ntnyq/gulp-diffable-html">
          gulp-diffable-html
        </a>
      </p>
    </footer>
  </body>
</html>
```

## License

[MIT](./LICENSE)
