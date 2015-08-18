'use strict';

/* App Module */

var playerApp = angular.module('playerApp', [
  'ngRoute',
  //'phonecatAnimations',

  'playersControllers'

]);

playerApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/teams', {
        templateUrl: 'partials/team-list.html',
        controller: 'TeamListCtrl'
      }).
      when('/players', {
        templateUrl: 'partials/player-list.html',
        controller: 'PlayerListCtrl'
      }).
      when('/players/:playerId', {
        templateUrl: 'partials/player-detail.html',
        controller: 'PlayerDetailCtrl'
      }).
      when('/players/form', {
        templateUrl: 'partials/player-form.html',
        controller: 'playerFormCtrl'
      }).
      otherwise({
        redirectTo: '/players'
      });
  }]);
