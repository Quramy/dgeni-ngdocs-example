'use strict';

/**
 * @ngdoc directive
 * @name awsome
 * @restrict A
 * @module dgeniNgdocExample
 *
 * @description
 *
 * aaa bbb ccc
 *
 * @example
 	 <example module="awsomeExample" deps="" animate="false">
  	 	<file name="index.html">
  	   	<div ng-controller="ExampleController as example">
		 			<div awsome>abcde</div>
  	  	</div>
			</file>
		 	<file name="script.js">
		 		angular.module('awsomeExample', []).controller('ExampleController', function(){
			 		var example = this;
				});
			</file>
	 </example>
 *
 **/
angular.module('dgeniNgdocExample').directive('awsome', function(){
	return{
		restrict: 'A',
		link: function($scope, $elem, $attrs){
		}
	};
});
