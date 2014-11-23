var gulp = require('gulp');
var Dgeni = require('dgeni');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('build:script_docs', [], function(){
	return gulp.src(['src/app/index.js', 'src/**/*.js'])
		.pipe($.concat('dgeniNgdocExample.js'))
		.pipe(gulp.dest('dist_docs'))
		;
});

gulp.task('dgeni', ['build:script_docs'], function() {
  try {
    var dgeni = new Dgeni([require('../docs/config/config')]);
    return dgeni.generate();
  } catch(x) {
    console.log(x.stack);
    throw x;
  }
});


