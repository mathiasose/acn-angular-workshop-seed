'use strict';

angular.module('accAngularWorkshopSeedApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'Bootstrap 3',
      'AngularJS 1.2-rc.2',
	  'ngResource',
      'ngRoute',
	  'angular-moment',
	  'jquery',
	  'Karma test-runner'
    ];
  });
