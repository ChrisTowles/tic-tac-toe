'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [ 'myApp.directives'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/tic-tac-toe', {templateUrl: 'partials/tic-tac-toe'});
    $routeProvider.otherwise({redirectTo: '/tic-tac-toe'});
  }]
)