'use strict';

angular.module('dgeniNgdocExampleDocs').directive('pre', function(){
	return {
		restrict: 'E',
		link: function($scope, $elem, $attrs){
			$elem.addClass('prettyprint');
			setTimeout(function(){
				// TODO
				prettyPrint();
			}, 0);

		}
	};
});
