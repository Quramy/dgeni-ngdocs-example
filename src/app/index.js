'use strict';

/**
 * @ngdoc module
 * @name dgeniNgdocExample
 * @module dgeniNgdocExample
 * @description
 *
 * # dgeniNgdocExample
 *
 * This is a ngdoc example application.
 *
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
