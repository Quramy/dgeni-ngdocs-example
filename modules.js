'use strict';

/**
 * @ngdoc module
 * @name dgeniNgdocExample
 * @module dgeniNgdocExample
 * @description
 *
 * This is a ngdoc example application module.
 *
 **/
angular.module('dgeniNgdocExample', ['ngRoute'])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
;

'use strict';

angular.module('dgeniNgdocExample')
  .controller('MainCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      {
        'key': 'angular',
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      {
        'key': 'browsersync',
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      },
      {
        'key': 'gulp',
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      },
      {
        'key': 'jasmine',
        'title': 'Jasmine',
        'url': 'http://jasmine.github.io/',
        'description': 'Behavior-Driven JavaScript.',
        'logo': 'jasmine.png'
      },
      {
        'key': 'karma',
        'title': 'Karma',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'karma.png'
      },
      {
        'key': 'protractor',
        'title': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'protractor.png'
      },
      {
        'key': 'jquery',
        'title': 'jQuery',
        'url': 'http://jquery.com/',
        'description': 'jQuery is a fast, small, and feature-rich JavaScript library.',
        'logo': 'jquery.jpg'
      },
      {
        'key': 'bootstrap',
        'title': 'Bootstrap',
        'url': 'http://getbootstrap.com/',
        'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
        'logo': 'bootstrap.png'
      }
    ];
    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  }]);

'use strict'

/**
 *
 * @ngdoc provider
 * @module dgeniNgdocExample
 * @name messageProvider
 *
 * @description
 *
 * Condigure messages.
 *
 * See also {@link message message service} .
 *
 *
 **/
angular.module('dgeniNgdocExample').provider('message', function(){
	var repos = {};
	return {

		/**
		 * @ngdoc method
		 * @name messageProvider#put
		 * @description
		 * Put a message to repository. See also `{@link message#get message#get}`.
		 *
		 *
		 * @param {string} id The message's ID.
		 * @param {string} message Content of this message.
		 *
		 **/
		put: function (id, messagge){
			repos[id] = messagge;
		},

		/**
		 * @ngdoc service
		 * @name message
		 * @module dgeniNgdocExample
		 * 
		 * @description
		 *
		 * This service provides messages to your app.
		 *
		 * @example
	 <example module="messageExample" deps="" animate="false">
      <file name="index.html">
        <div ng-controller="ExampleController as example">
          messages: <span>{{example.msg}}</span>
        </div>
      </file>
		 	<file name="script.js">
        angular.module('messageExample', ['dgeniNgdocExample'])
        .config(function (messageProvider) {
          messageProvider.put('msg01', 'Hello, world!');
        })
        .controller('ExampleController', function(message){
          var example = this;
          example.msg = message.get('msg01');
        });
			</file>
	 </example>
		 **/
		$get: function () {
			return {

				/**
				 * @ngdoc method
				 * @name message#get
				 *
				 * @description
				 * Get a messages by ID.
				 *
				 * @param {string} id A message ID.
				 * @return {string} message
				 *
				 **/
				get: function(id){
					return repos[id];
				}
			};
		}
	};
});

'use strict';

/**
 * @ngdoc directive
 * @name awesome
 * @restrict E
 * @module dgeniNgdocExample
 *
 * @description
 *
 * It is an awesome directive.
 *
 * @example
 	 <example module="awsomeExample" deps="" animate="false">
      <file name="index.html">
        <div ng-controller="ExampleController as example">
          <awesome></awesome>
        </div>
      </file>
		 	<file name="script.js">
        angular.module('awsomeExample', ['dgeniNgdocExample']).controller('ExampleController', function(){
          var example = this;
        });
			</file>
	 </example>
 *
 **/
angular.module('dgeniNgdocExample').directive('awesome', function(){
	return{
		restrict: 'E',
		template: '<div>This is an Awesome!</div>'
	};
});

'use strict';

angular.module('dgeniNgdocExample')
  .controller('NavbarCtrl', ["$scope", function ($scope) {
    $scope.date = new Date();
  }]);
