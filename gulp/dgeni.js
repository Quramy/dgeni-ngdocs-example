var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

var _ = require('lodash');
var Dgeni = require('dgeni');

var bowerFiles = require('../docs/lib/bowerCommonFiles')({
  base: '../../deps',
  exclude: [/bootstrap.js/],
  bowerJson: require('../bower.json')
}), deployment = {
  name: 'default',
  examples: {

    // These files are injected to examples' html.
    commonFiles: {
      scripts: _.union(bowerFiles.scripts, ['../../modules.js']),
      stylesheets: _.union(bowerFiles.stylesheets, ['../../modules.css'])
    },
    dependencyPath: '../../deps'
  }
};
 
var dgeniGenerate = function () {
  try {
    var dgeni = new Dgeni([require('../docs/config/')
      .config(function (generateExamplesProcessor, generateProtractorTestsProcessor){
        generateExamplesProcessor.deployments = [deployment];
        generateProtractorTestsProcessor.deployments = [deployment];
      })
      .config(function (renderDocsProcessor) {
        renderDocsProcessor.extraData.deploymentTarget = 'default';
      })
    ]);
    return dgeni.generate();
  } catch(x) {
    console.log(x.stack);
    throw x;
  }
};

gulp.task('dgeni', function (done){
  dgeniGenerate().then(function () {
    done();
  });
});

gulp.task('copy_dependencies:examples', function () {
	var depPath = deployment.examples.dependencyPath;
	var scripts = bowerFiles.scripts || [];
  var stylesheets = bowerFiles.stylesheets || [];
	var deps = _.union(scripts, stylesheets).filter(function (it) {
		return it.match(depPath)
	}).map(function (it) {
		return it.replace(depPath, 'bower_components');
	});

	return gulp.src(deps, {base: 'bower_components'})
		.pipe(gulp.dest('dist_docs/deps'))
		.pipe($.size());
});

