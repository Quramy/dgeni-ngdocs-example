'use strict';

// If you want HASHMODE, leave the following commentout.
// var DOCS_OVERWRITELINK = true;

angular.module('dgeniNgdocExampleDocs', ['ngRoute'])
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
