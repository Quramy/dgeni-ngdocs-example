// Canonical path provides a consistent path (i.e. always forward slashes) across different OSes
var path = require('canonical-path');

var Package = require('dgeni').Package;

// Create and export a new Dgeni package called dgeni-example. This package depends upon
// the jsdoc and nunjucks packages defined in the dgeni-packages npm module.
module.exports = new Package('dgeni-ngdoc-example', [
  require('dgeni-packages/jsdoc'),
  require('dgeni-packages/ngdoc'),
  require('dgeni-packages/nunjucks'),
  require('dgeni-packages/examples')
])

// Configure our dgeni-example package. We can ask the Dgeni dependency injector
// to provide us with access to services and processors that we wish to configure
.config(function(log, readFilesProcessor, templateFinder, writeFilesProcessor) {

  // Set logging level
  log.level = 'info';

  // Specify the base path used when resolving relative paths to source and output files
  readFilesProcessor.basePath = path.resolve(__dirname, '../..');

  // Specify collections of source files that should contain the documentation to extract
  readFilesProcessor.sourceFiles = [
    {
      include: 'src/**/*.js',
      //exclude: 'src/do-not-read.js',
      basePath: 'src'
    },
    { include: 'docs/content/**/*.ngdoc', basePath: 'docs/content' }
  ];

  // Add a folder to search for our own templates to use when rendering docs
  templateFinder.templateFolders.unshift(path.resolve(__dirname, 'templates'));

  // Specify how to match docs to templates.
  // In this case we just use the same static template for all docs
  //templateFinder.templatePatterns.unshift('common.template.html');

  // Specify where the writeFilesProcessor will write our generated doc files
  writeFilesProcessor.outputFolder  = 'dist_docs';
})

.config(function(computePathsProcessor, computeIdsProcessor){

	computePathsProcessor.pathTemplates.push({
		docTypes: ['overview'],
		getPath: function(doc){
			var docPath = path.dirname(doc.fileInfo.relativePath);
      if ( doc.fileInfo.baseName !== 'index' ) {
        docPath = path.join(docPath, doc.fileInfo.baseName);
      }else{
				return 'index';
			}
			//console.log(docPath);
			return docPath;
		},
		outputPathTemplate: 'partials/${path}.html'
	});

	computeIdsProcessor.idTemplates.push({
		docTypes: ['overview'],
		getId: function(doc){
			//console.log(doc);
			return doc.fileInfo.baseName;
		},
		getAliases: function(doc){
			return [doc.id];
		}
	});
})

.config(function(generateExamplesProcessor, generateProtractorTestsProcessor) {
	var deployments = [
		{
			name: 'default',
			examples: {
				commonFiles: {
					scripts: ['../../bower_components/angular/angular.js']
				},
				dependencyPath: '../../../'
			}
		}
	];

	generateExamplesProcessor.deployments = deployments;
	generateProtractorTestsProcessor.deployments = deployments;
});
