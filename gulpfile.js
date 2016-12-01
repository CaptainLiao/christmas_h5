var gulp = require('gulp'),
    less = require('gulp-less'),
    clean = require('gulp-clean'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify');

//gulp.task('js', function () {
//    gulp.src('task/mouseEvent.js')
//        .pipe(uglify())
//        .pipe(gulp.dest('dist/js'));
//});

gulp.task('less', function() {
    gulp.src('task/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist'));
})

gulp.task('babel', function () {
    gulp.src("task/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"))
})

gulp.task("clean", function (){
    "use strict";
    return gulp.src(['dist'])
    .pipe(clean());
})

gulp.task('watch', function() {

    gulp.watch(['task/*.js'], ['babel']);
    gulp.watch('task/*.less',['less']);
});