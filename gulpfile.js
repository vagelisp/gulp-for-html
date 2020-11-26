"use strict";

let settings = {
	devUrl: ""
};

let gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	browserSync = require('browser-sync').create(),
    browserify = require("browserify"),
    source = require("vinyl-source-stream"),
    buffer = require("vinyl-buffer"),
	uglify = require("gulp-uglify");
	
let imagemin = require("gulp-imagemin");


/**
 * Sass - command 'gulp sass' / 'gulp sass:watch'
 */
gulp.task('scss', function(){
	return gulp.src('css/main.scss')
	  	.pipe(sourcemaps.init())
	    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(sourcemaps.write('.'))
	    .pipe(gulp.dest('css'))
	    .pipe(browserSync.stream());
});

gulp.task('scss:watch', function(){
	gulp.watch(['css/**/*.scss'], gulp.task('scss'));
});

/**
 * Js - command 'gulp js' / 'gulp js:watch'
 */

gulp.task('js', function(){
	return browserify({
		entries: ["js/init.js"]
	})
	.bundle()
	.pipe(source("init.min.js"))
	.pipe(buffer())
	.pipe(sourcemaps.init())
	.pipe(uglify())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest("js"));
});

gulp.task('js:watch', function(){
	gulp.watch(['js/init.js'], gulp.task('js'));
});

/**
 * Images - command 'gulp images' / 'gulp js:images'
 */

gulp.task('images', async function(){
    gulp
      .src(["images/**/*"])
      .pipe( 
        imagemin([
          imagemin.gifsicle({ interlaced: true }),
          imagemin.mozjpeg({ quality: 75, progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 }),
          imagemin.svgo({
            plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
          }),
        ])
      )
		.pipe(gulp.dest("images"));
});

gulp.task("images:watch", async function () {
  gulp.watch(["images/**/*"], gulp.task("images"));
});

/**
 * Command 'gulp' (default)
 */
gulp.task('default', gulp.series('scss','scss:watch'));

/**
 * Command 'gulp watch'
 */
gulp.task('watch', gulp.parallel('scss:watch', 'js:watch'));

/**
 * Command 'gulp watch-all - includes images -
 */
gulp.task("watch-all", gulp.parallel("scss:watch", "js:watch", "images:watch"));

/**
 * Command 'gulp serve' - includes browser syncing
 */
gulp.task('serve', function(){
	browserSync.init({
		//proxy: settings.devUrl
		server: "./"
    });
	gulp.watch(['scss/**/*.scss']).on('change', gulp.task('scss'));
	gulp.watch(['js/init.js']).on('change', gulp.task('js'));
	gulp.watch(["images"]).on("change", gulp.task("images"));
	gulp.watch('**/*.html', browserSync.reload);
	
});