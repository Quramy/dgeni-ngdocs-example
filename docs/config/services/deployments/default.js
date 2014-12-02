'use strict';

module.exports = function defaultDeployment() {
	return {
		name: 'default',
		examples: {
			commonFiles: {
				scripts: [
					'../../deps/jquery/dist/jquery.min.js',
					'../../deps/angular/angular.min.js',
					'../../deps/angular-route/angular-route.min.js',
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
