'use strict';

(function(factory){

	factory({$ doc.areaIds | json $});

})(typeof angular === 'undefined' ? function(value){
	module.exports = value;
} : function(value){
	angular.module('dgeniNgdocExampleDocs').value('DOCS_AREA_DATA', value);
});

