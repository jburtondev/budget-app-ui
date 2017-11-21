'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
 
gulp.task('sass', function () {
  return gulp.src('src/app/**/*.scss*')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('src/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('src/app/**/*.scss*', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);
