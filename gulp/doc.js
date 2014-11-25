var gulp = require('gulp');
var Dgeni = require('dgeni');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('build:script_docs', [], function(){
	return gulp.src(['src/app/index.js', 'src/**/*.js'])
		.pipe($.concat('dgeniNgdocExample.js'))
		.pipe(gulp.dest('.tmp_docs'))
		;
});

gulp.task('dgeni', ['build:script_docs'], function() {
  try {
    var dgeni = new Dgeni([require('../docs/config/')]);
    return dgeni.generate();
  } catch(x) {
    console.log(x.stack);
    throw x;
  }
});

gulp.task('partials:docs', [], function () {
	return gulp.src(['.tmp_docs/partials/**/*.html'])
	/*
		.pipe($.minifyHtml({
			empty: true,
			spare: true,
			quotes: true
		}))*/
    .pipe($.ngHtml2js({
      moduleName: 'dgeniNgdocExampleDocs'
    }))
		.pipe(gulp.dest('.tmp_docs/partials'))
		.pipe($.size());
});

gulp.task('html:docs', ['partials:docs'], function(){
	return gulp.src(['docs/app/index.html'])
		.pipe(gulp.dest('dist_docs'));
});

gulp.task('build:docs', ['dgeni', 'html:docs'], function() {
	return gulp.src(['.tmp_docs/**/*'])
		.pipe(gulp.dest('dist_docs'));
});

