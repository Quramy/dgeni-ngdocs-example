'use strict';

angular.module('dgeniNgdocExampleDocs').controller('DocsCtrl', function($scope, $location){
	var docs = this;
	this.currentPath = 'api/dgeniNgdocExample';

	$scope.$watch(function(){
		return $location.path();
	}, function(newPath){
		if(!newPath.match(/\/$/)){
			newPath = newPath + '/';
		}
		if(!newPath.match(/\.html$/)){
			console.log(newPath);
		}
	});

});
