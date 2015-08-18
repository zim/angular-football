'use strict';

/* Controllers */

var playersControllers = angular.module('playersControllers', []);

playersControllers.controller('PlayerListCtrl', ['$scope', '$http', function($scope, $http) {

  $http.get("js/teams.json").success(function(response) {
    console.log("response.teams = " + response.teams);
    console.log("response.teams.players = " + response.teams.players);

    $scope.teams = response.teams;
    //$scope.teams.players = response.teams.players;

  });
  // end $http.get("js/data.json").success(function(response) {

}]);
// end playersControllers.controller('PlayerListCtrl', ['$scope', '$http', function($scope, $http) {

playersControllers.controller('TeamListCtrl', ['$scope', '$http', function($scope, $http) {

  $http.get("js/teams.json").success(function(response) {
    console.log(response.teams);

    $scope.teams = response.teams;
    //$scope.players = response.teams;

  });
  // end $http.get("js/data.json").success(function(response) {

  $scope.myVar = true;
  $scope.togglePlayers = function() {
        $scope.myVar = !$scope.myVar;
    };

}]);
// end playersControllers.controller('PlayerListCtrl', ['$scope', '$http', function($scope, $http) {


// TEAM FORM CONTROLLER DIRECTIVE
playersControllers.controller('TeamFormCtrl', function($scope) {

    //$scope.master = {firstName: "John", lastName: "Doe"};

    $scope.reset = function() {
        $scope.teamSearch = angular.copy($scope.master);
    };

    $scope.reset();

    $scope.searchTeams = function() {
        console.log('search button clicked and teamSearch = ' + $scope.queryTeam);

        $http.get("js/teams.json").success(function(response) {
          console.log(response.teams);

          $scope.teams = response.teams;

        });


    };
});// end $http.get("js/data.json").success(function(response) {

// PLAYER FORM CONTROLLER DIRECTIVE
playersControllers.controller('playerFormCtrl', function($scope) {

    //$scope.master = {firstName: "John", lastName: "Doe"};

    $scope.reset = function() {
        $scope.playerSearch = angular.copy($scope.master);
    };

    $scope.reset();

    $scope.searchPlayers = function() {
        console.log('search button clicked and playerSearch = ' + $scope.query);

        $http.get("js/arsenal.json").success(function(response) {
          console.log(response.teams);

          $scope.teams = response.teams;

        });


    };
});// end $http.get("js/data.json").success(function(response) {




// phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
//   function($scope, $routeParams, Phone) {
//     $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//       $scope.mainImageUrl = phone.images[0];
//     });
//
//     $scope.setImage = function(imageUrl) {
//       $scope.mainImageUrl = imageUrl;
//     };
//   }]);


// PLAYERS DETAIL PAGE
playersControllers.controller('PlayerDetailCtrl', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {

  //console.log('PlayerDetailCtrl called ' + $scope.playerSearch);
  console.log('PlayerDetailCtrl called ==========');

  $http.get("js/teams.json").success(function(response) {



    $scope.players = response.players;
    $scope.whichItem = $routeParams.playerId;

    console.log('$scope.whichItem = ' + $scope.whichItem);

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.players.length-1;
    }

    if ($routeParams.itemId < $scope.players.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
  // END $http.get("js/data.json").success(function(response) {

}]);
// END artistControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
