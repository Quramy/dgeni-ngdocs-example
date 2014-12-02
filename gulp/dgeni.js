var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

var Dgeni = require('dgeni');

var dgeniGenerate = function (deployment) {
  try {
    var dgeni = new Dgeni([require('../docs/config/')
      .config(function (renderDocsProcessor) {
        renderDocsProcessor.extraData.deploymentTarget = deployment || 'default';
      })
    ]);
    return dgeni.generate();
  } catch(x) {
    console.log(x.stack);
    throw x;
  }
};

gulp.task('dgeni', function (done){
  dgeniGenerate('debug').then(function () {
    done();
  });
});

gulp.task('dgeni:prod', function (done) {
  dgeniGenerate('prod').then(function () {
    done();
  });
});

gulp.task('copy_dependencies:examples', function () {
	var deployment = require('../docs/config/services/deployments/prod')();
	var depPath = deployment.examples.dependencyPath;
	var scripts = deployment.examples.commonFiles.scripts || [];
	var deps = scripts.filter(function (it) {
		return it.match(depPath)
	}).map(function (it) {
		return it.replace(depPath, 'bower_components');
	});

	return gulp.src(deps, {base: 'bower_components'})
		.pipe(gulp.dest('dist_docs/deps'))
		.pipe($.size());
});

