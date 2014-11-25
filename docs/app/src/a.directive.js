
'use strict';

angular.module('dgeniNgdocExampleDocs').directive('a', function(DOCS_OVERWRITELINK, DOCS_AREA_DATA){
	var linkCache = {};
	var isRewrite = function(link){
		var res = link.indexOf('#+') === -1;
		if(!res){
			return false;
		}
		res = false;
		angular.forEach(DOCS_AREA_DATA, function(area){
			res = res || link.indexOf(area) === 0; 
		});
		return res;
	};
	return {
		restrict: 'E',
		priprity: 100,
		link: function($scope, $elem, $attrs){
			if(!DOCS_OVERWRITELINK){
				return;
			}
			setTimeout(function(){
				var link = $elem.attr('href'), newLink;
				newLink = linkCache[link];
				if(!newLink){
					if(isRewrite(link)){
						//console.log(link);
						newLink = '#+' + link;
						linkCache[link] = newLink;
					}
				}
				$elem.attr('href', newLink);
			}, 0);
		}
	};
});
