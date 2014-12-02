'use strict';

module.exports = function debugDeployment() {
	return {
		name: 'debug',
		examples: {
			commonFiles: {
				scripts: [
					'../../deps/jquery/dist/jquery.js',
					'../../deps/angular/angular.js',
					'../../modules.js'
				],
				stylesheets: [
					'../../modules.css'
        ]
			},
			dependencyPath: '../../deps'
		}
	};
}
