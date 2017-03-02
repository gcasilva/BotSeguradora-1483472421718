/**
* Linting Gulpfile
*/

var gulp = require('gulp'),
//These paths need to be changed based on the location of the respective files on your application
    paths = {
        html:['client/**/*.html','server/**/*.html'],
        css:['client/**/*.css','server/**/*.css'],
        js:['client/**/*.js','server/**/*.js','routes/**/*.js','!.meteor/**/*.js','app.js']
    },
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    htmllint = require('gulp-htmllint'),
    csslint = require('gulp-csslint');


/*
Gulp tasks for linting
*/

// Uses the .jshintrc file with some default configurations. Update the .jshintrc file based on the project requirements
gulp.task('lint-js', function () {
    return gulp.src(paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Uses the .jscsrc file with some default configurations. Update the .jscsrc file based on the project requirements
gulp.task('lint-jscs', function () {
    return gulp.src(paths.js)
    .pipe(jscs());
});
