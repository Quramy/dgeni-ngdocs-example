'use strict';

var gulp = require('gulp');

var util = require('util');

var browserSync = require('browser-sync');

var middleware = require('./proxy');

function browserSyncInit(baseDir, files, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null, forwardIndexPrefix;
  var isDebug = baseDir === 'src' || (util.isArray(baseDir) && baseDir.indexOf('src') !== -1);
  var isDoc = baseDir === '.tmp_docs' || (util.isArray(baseDir) && baseDir.indexOf('.tmp_docs') !== -1);
  if(isDebug){
    routes = {
      // Should be '/bower_components': '../bower_components'
      // Waiting for https://github.com/shakyShane/browser-sync/issues/308
      '/bower_components': 'bower_components'
    };
	}
	if(isDoc){
		routes = {
			'/bower_components': 'docs/bower_components'
    };

		forwardIndexPrefix = require('../.tmp_docs/js/area-data');
		middleware.push(function(req, res, next){
			forwardIndexPrefix.forEach(function(area){
				if(req.url === '/' + area || req.url.indexOf('/' + area + '/') === 0){
					req.url = '/index.html';
				}
			});
			next();
		});
	}


	browserSync.instance = browserSync.init(files, {
		startPath: '/index.html',
		server: {
			baseDir: baseDir,
			middleware: middleware,
			routes: routes
		},
		browser: browser
	});

}

gulp.task('serve', ['watch'], function () {
	browserSyncInit([
		'src',
		'.tmp'
	], [
		'.tmp/{app,components}/**/*.css',
		'src/assets/images/**/*',
		'src/*.html',
		'src/{app,components}/**/*.html',
		'src/{app,components}/**/*.js'
	]);
});

gulp.task('bs:relaod', [], function(){
	browserSync.reload();
});

gulp.task('serve:docs', ['dgeni', 'wiredep:docs'], function(){
	browserSyncInit([
		'.tmp_docs',
		'docs/app'
	], ['.tmp_docs/**/*', 'docs/app/*.html', 'docs/app/src/**/*']);
});

gulp.task('serve:dist', ['build'], function () {
	browserSyncInit('dist');
});

gulp.task('serve:e2e', function () {
	browserSyncInit(['src', '.tmp'], null, []);
});

gulp.task('serve:e2e-dist', ['watch'], function () {
	browserSyncInit('dist', null, []);
});

