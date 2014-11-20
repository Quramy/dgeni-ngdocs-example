'use strict';

angular.module('dgeniNgdocExampleDocs').controller('DocsCtrl', function($scope, $location){
	var docs = this;
	var basePath = '/';

	docs.changeCurrent = function(newPath){
		newPath = newPath.replace(new RegExp('^' + basePath), '');
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
