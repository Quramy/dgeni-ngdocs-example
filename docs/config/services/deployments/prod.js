'use strict';

module.exports = function prodDeployment() {
	return {
		name: 'prod',
		examples: {
			commonFiles: {
				scripts: [
					'../../deps/jquery/dist/jquery.min.js',
					'../../deps/angular/angular.min.js',
					'../../modules.js'
				],
				stylesheets: [
					'../../modules.css'
        ]
			},
			dependencyPath: '../../deps'
		},
	};
};
