'use strict';

module.exports = function debugDeployment() {
	return {
		name: 'debug',
		examples: {
			commonFiles: {
				scripts: [
					'../../bower_components/angular/angular.js',
					'../../bower_components/angular-route/angular-route.js',
					'../../dgeniNgdocExample.js'
				]
			},
			dependencyPath: '../../../'
		}
	};
}
