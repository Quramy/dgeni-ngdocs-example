'use strict';

angular.module('dgeniNgdocExampleDocs').controller('DocsCtrl', function($scope, $rootScope, $location, $anchorScroll, DOCS_NAVIGATION){
	var docs = this;
	var basePath = '/';

	docs.currentArea = null;

	docs.navState = function (navItem) {
		var res = [];
		if (navItem.type === 'section'){
			res.push('nav-index-section');
		} 
		if ('/' + navItem.href === docs.currentPath){
			res.push('current');
		}
		return res;
	};

	docs.changeCurrent = function(newPath, hash){
		var area
		docs.currentPath = newPath;
		newPath = newPath.replace(new RegExp('^' + basePath), '');
		area = newPath.split('/')[0];
		docs.currentArea = DOCS_NAVIGATION[area];

		if(newPath === '' || newPath === 'index.html'){
			newPath = 'index';
		}
		if(!newPath.match(/\.html$/)){
			newPath = newPath + '.html';
		}
		newPath = 'partials/' + newPath;

		//console.log(newPath, hash);

		docs.currentHash = hash;
		docs.partialPath = newPath;

	};

  $scope.$on('changePath', function(e, path, hash){
		docs.changeCurrent(path, hash);
	});

	$rootScope.$on('$locationChangeStart', function(e, arg){
		$rootScope.$broadcast('changePath', $location.path(), $location.hash());
	});

});

