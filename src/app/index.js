'use strict';

/**
 *
 * @ngdoc module
 * @name dgeniNgdocExample
 * @module dgeniNgdocExample
 * @packageName dgeni-ngdoc-example
 * @description
 *
 * This is a ngdoc example application module.
 *
 **/
angular.module('dgeniNgdocExample', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
