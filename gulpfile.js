(function () {
    'use strict';
    var gulp = require('gulp');
    var sass = require('gulp-sass');

    gulp.task('sass', function () {
        gulp.src('./public/styles/main.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
    });
    gulp.task('sass:watch', function () {
        gulp.watch('./public/components/**/styles/*.scss',['sass']);
    });

    gulp.task('default', ['sass:watch']);

}());
