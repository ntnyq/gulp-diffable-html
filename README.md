# gulp-diffable-html

> __Migrated to [gulp-plugins](https://github.com/ntnyq/gulp-plugins)__

:beer: A simple gulp plugin for html formatting via diffable-html.

## Install

``` bash
$ npm install gulp-diffable-html --save-dev
# OR
$ yarn add gulp-diffable-html -D
```

## Setup

``` js
const gulp = require('gulp')
const diffableHtml = require('gulp-diffable-html')

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

## Features

- zero-config
- indenting every level with 2 spaces
- align attributes
- put every opening and closing tag on its own line
- trimming text nodes

## Example

Input:

``` html
<!DOCTYPE html><!--[if IE 9]>.... some HTML here ....<![endif]--><html lang="en"><head><meta charset="UTF-8"><title>gulp-diffable-html</title></head><body><header><h1><span>I am h1 in header</span></h1></header><main><p><!----><span></span><b>b</b><strong>strong</strong><em>&copy;</em><!-- This comment should be removed --></p></main><footer><p><a href="https://github.com/ntnyq/gulp-diffable-html" target="_blank" rel="noopener" >gulp-diffable-html</a></p></footer></body></html>
```

Output:

``` html
<!DOCTYPE html>
<!--[if IE 9]>.... some HTML here ....<![endif]-->
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
        </span>
        <b>
          b
        </b>
        <strong>
          strong
        </strong>
        <em>
          &copy;
        </em>
      </p>
    </main>
    <footer>
      <p>
        <a href="https://github.com/ntnyq/gulp-diffable-html"
           target="_blank"
           rel="noopener"
        >
          gulp-diffable-html
        </a>
      </p>
    </footer>
  </body>
</html>
```

## Options

__gulp-diffable-html__ is based on [diffable-html](https://github.com/rayrutjes/diffable-html) which is a __zero-config__ HTML formatter.

### verbose

- __type__ `boolean`
- __default__ `false`

Display name of file from stream that is being formatting

## License

[MIT](./LICENSE) &copy; [@ntnyq](https://github.com/ntnyq)
