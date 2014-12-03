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


gulp.task('hoge', function () {
  var path = require('canonical-path');
  var _ = require('lodash');
  var mainBowerFiles = require('main-bower-files');

  var main = mainBowerFiles({
    bowerJson: require('../bower.json')
  });

  var options = {
    base: '../../../../deps',
    exclude: [/bootstrap/]
  };

  var scripts = [], stylesheets = [];
  var bowerDir = path.normalize(__dirname + '/../bower_components');
  //console.log(path.normalize(__dirname + '/../bower_components'));
  var aaa =_(main).map(function(file){
    return relativepath = path.relative(bowerDir, path.normalize(file))
  }).filter(function(file){
    var res = false;
    _.forEach(options.exclude, function(pattern){
      //console.log(file, pattern, file.match(pattern), pattern.test(file));
      res = res || file.match(pattern);
    });
    return !res;
  }).map(function(file){
    return {
      ext: path.extname(file),
      relativepath: file
    }
  });

  console.log(aaa);
  _(main).forEach(function(file){
    var ext = path.extname(file);
    var relativepath = path.relative(bowerDir, path.normalize(file))

    relativepath = options.base + '/' + relativepath;
    if(ext === '.js'){
      scripts.push[relativepath];
      console.log(relativepath);
    }else if(ext === '.css'){
      stylesheets.push[relativepath];
    }
  });
  console.log(scripts);
  console.log(stylesheets);


});
