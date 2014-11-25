'use strict';

module.exports = function debugDeployment() {
	return {
		name: 'debug',
		examples: {
			commonFiles: {
				scripts: [
					'../../deps/jquery/dist/jquery.js',
					'../../deps/angular/angular.js',
					'../../deps/angular-route/angular-route.js',
					'../../dgeniNgdocExample.js'
				],
				stylesheets: []
			},
			dependencyPath: '../../deps'
		}
	};
}
