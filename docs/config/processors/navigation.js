'use strict';

var _=require('lodash');

module.exports = function generateNavigationProcessor (log){

	var debug = log.info;

	return {
		$runAfter: ['paths-computed'],
		$runBefore: ['rendering-docs'],
		$process: function(docs){

			var areas = {};
			var pages = _.filter(docs, function(it){return it.area;});

			docs.push({
				docType: 'nav-data',
				id: 'nav-data',
				template: 'nav-data.template.js',
				outputPath: 'js/nav-data.js',
				areas: areas
			});

		}
	};
};
