'use strict';

/**
 * @ngdoc directive
 * @name awesome
 * @restrict E
 * @module dgeniNgdocExample
 *
 * @description
 *
 * It is a greate directive.
 *
 * @example
 	 <example module="awsomeExample" deps="" animate="false">
      <file name="index.html">
        <div ng-controller="ExampleController as example">
          <awesome></awesome>
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
angular.module('dgeniNgdocExample').directive('awesome', function(){
	return{
		restrict: 'E',
		template: '<div>Awesome</div>'
	};
});
