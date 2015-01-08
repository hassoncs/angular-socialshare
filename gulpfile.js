var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');
var prefix = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');

gulp.task('styles', function () {
  return gulp.src('./angular-socialshare.scss')
    .pipe(sass({
      precision: 10
    }))
    .pipe(prefix())
    .pipe(minify({ keepSpecialComments: 1 }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./'));
});

gulp.task('scripts', function (){
  gulp.src('./angular-socialshare.js')
  .pipe(rename('angular-socialshare.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./'));
});

gulp.task('default', ['styles', 'scripts']);
