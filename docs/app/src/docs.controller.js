'use strict';

angular.module('dgeniNgdocExampleDocs').controller('DocsCtrl', function($scope, $location, DOCS_NAVIGATION){
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

	docs.changeCurrent = function(newPath){
		var area
		docs.currentPath = newPath;
		newPath = newPath.replace(new RegExp('^' + basePath), '');
		area = newPath.split('/')[0];
		docs.currentArea = DOCS_NAVIGATION[area];

		if(newPath === '' || newPath === 'index.html'){
			docs.partialPath= 'index.html';
		}else{
			if(!newPath.match(/\.html$/)){
				newPath = newPath + '.html';
			}
		}
		newPath = 'partials/' + newPath;
		console.log(newPath);
		docs.partialPath = newPath;

	};

	$scope.$watch(function(){
		return $location.path();
	}, function(newPath){
		docs.changeCurrent(newPath);
	});

});

angular.module('dgeniNgdocExampleDocs').directive('pre', function(){
	return {
		link: function($scope, $elem, $attrs){
			$elem.addClass('prettyprint');
			setTimeout(function(){
				// TODO
				prettyPrint();
			}, 0);

		}
	};
});
