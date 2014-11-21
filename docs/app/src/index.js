'use strict';

angular.module('dgeniNgdocExampleDocs', ['ngRoute'])
/*
.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'main.html'
	})
})*/
.config(function($locationProvider){
	$locationProvider.hashPrefix('!');
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: true,
		rewriteLinks: true
	});
});
