'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.searchComponent',
  'myApp.infoComponent',
  'myApp.mainComponent',
  'myApp.citiesListComponent',
  'myApp.weatherDetailComponent',
  'myApp.service',
  'myApp.utils'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/searchComponent'});
}]);
