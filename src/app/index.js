'use strict';

/**
 * @ngdoc module
 * @name dgeniNgdocExample
 * @module dgeniNgdocExample
 * @description
 *
 * This is a ngdoc example application module.
 *
 * 1. aaaa
 * 
 * 1. bbbb
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
