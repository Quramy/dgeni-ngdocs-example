'use strict';

angular.module('docApp').directive('pre', function(){
	return {
		restrict: 'E',
		link: function($scope, $elem, $attrs){
			$elem.addClass('prettyprint');
			setTimeout(function(){
				// TODO replace prettyPrintOne()
				prettyPrint();
			}, 0);

		}
	};
});
