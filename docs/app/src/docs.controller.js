'use strict';

angular.module('dgeniNgdocExampleDocs').controller('DocsCtrl', function($scope, $location, DOCS_NAVIGATION){
	var docs = this;
	var basePath = '/';

	docs.currentArea = null;

	docs.changeCurrent = function(newPath){
		var area
		newPath = newPath.replace(new RegExp('^' + basePath), '');
		area = newPath.split('/')[0];
		docs.currentArea = DOCS_NAVIGATION[area];
		if(!newPath.match(/\.html$/)){
			if(!newPath.match(/\/$/)){
				newPath = newPath + '/';
			}
			newPath = newPath + 'index.html';
			console.log(newPath);
		}
		newPath = 'partials/' + newPath;
		//console.log(newPath);
		docs.currentPath = newPath;

	};

	$scope.$watch(function(){
		return $location.path();
	}, function(newPath){
		docs.changeCurrent(newPath);
	});

});
