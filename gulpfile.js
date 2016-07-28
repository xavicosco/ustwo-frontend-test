var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass');
	rename = require("gulp-rename");
	minifyCSS = require('gulp-minify-css');
	
var paths = {
	scss: 'css/*.scss',
	css: ['css/*.css', '!css/*.min.css'],
	js: ['js/*.js', '!js/*.min.js'],
};

//cmd type 'gulp'
gulp.task('default', ['watch']);

gulp.task('uglify', function() {
	gulp.src(paths.js)
        .pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./build/'));
});

gulp.task('scss', function() {
    gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'));
});

gulp.task('mincss', function() {
    gulp.src(paths.css)
        .pipe(minifyCSS())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('./build/'))
});

//watch changing tasks: stylesheet scss and minify css
gulp.task('watch', function() {
    gulp.watch('css/*.scss', ['scss']);
    gulp.watch('css/*.css', ['mincss']);
    gulp.watch('js/*.js', ['uglify']);
});