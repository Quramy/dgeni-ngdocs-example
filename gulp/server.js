'use strict';

var gulp = require('gulp');

var util = require('util');

var browserSync = require('browser-sync');

var middleware = require('./proxy');

function browserSyncInit(baseDir, files, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  var isDebug = baseDir === 'src' || (util.isArray(baseDir) && baseDir.indexOf('src') !== -1);
  var isDoc = baseDir === 'dist_docs' || (util.isArray(baseDir) && baseDir.indexOf('dist_docs') !== -1);
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

		middleware.push(function(req, res, next){
			['/api', '/guide'].forEach(function(area){
				if(req.url === area || req.url.indexOf(area + '/') === 0){
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
		'dist_docs',
		'docs/app'
	], ['dist_docs/**/*', 'docs/app/*.html', 'docs/app/src/**/*']);
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

