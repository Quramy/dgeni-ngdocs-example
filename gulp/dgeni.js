var gulp = require('gulp');
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

