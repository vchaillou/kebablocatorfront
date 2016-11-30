'use strict';

/**
 * @ngdoc function
 * @name kebablocatorfrontApp.controller:FindCtrl
 * @description
 * # FindCtrl
 * Controller of the kebablocatorfrontApp
 */
angular.module('kebablocatorfrontApp')
  .controller('FindCtrl', function ($http, $scope) {
    $scope.findKebab = function(ville) {
      $http.get("https://kebablocatorback.herokuapp.com/kebab/ville/"+ville.replace(" ", "%20")).success(function(data) {
        $scope.kebabs = data;
      })
    }
  });

