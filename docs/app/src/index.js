'use strict';

angular.module('dgeniNgdocExampleDocs', [])
.config(function($locationProvider){
		$locationProvider.hashPrefix('!');
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: true,
			rewriteLinks: true
		});
})
.factory('DOCS_OVERWRITELINK', function () {
	if(typeof DOCS_OVERWRITELINK === 'undefined'){
		return false;
	}else{
		return DOCS_OVERWRITELINK;
	}
});
