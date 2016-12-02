'use strict';

/**
 * @ngdoc function
 * @name kebablocatorfrontApp.controller:HealthCtrl
 * @description
 * # HealthCtrl
 * Controller of the kebablocatorfrontApp
 */
angular.module('kebablocatorfrontApp')
  .controller('HealthCtrl', function ($http, $scope) {
    $http.get("http://localhost:8090/health").success(function(data) {
        $scope.health = data;
        console.log(data);
      })
  });
