const gulp = require('gulp')
const diffableHtml = require('./index')

function views () {
  return gulp
    .src('dev/**/*.html')
    .pipe(
      diffableHtml({
        verbose: true,
      })
    )
    .pipe(gulp.dest('dist'))
}

exports.dev = gulp.series(views)
