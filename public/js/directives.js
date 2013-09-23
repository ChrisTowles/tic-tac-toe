'use strict';

/* Directives */
var myApp_directives = angular.module('myApp.directives', []);

/**
 * For tracking howmany time Engineers accessed the site :)
 */
myApp.directive('googleAnalytics', function ( $location, $window ) {
  return {
    scope: true,
    link: function (scope) {
      scope.$on( '$routeChangeSuccess', function () {
        $window._gaq.push(['_trackPageview', $location.path()]);
      });
    }
  };
});