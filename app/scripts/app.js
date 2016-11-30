'use strict';

/**
 * @ngdoc overview
 * @name kebablocatorfrontApp
 * @description
 * # kebablocatorfrontApp
 *
 * Main module of the application.
 */
angular
  .module('kebablocatorfrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/ajouter_kebab', {
        templateUrl: 'views/ajouter_kebab.html',
        controller: 'AddCtrl',
        controllerAs: 'add'
      })
      .when('/trouver_kebab', {
        templateUrl: 'views/trouver_kebab.html',
        controller: 'FindCtrl',
        controllerAs: 'find'
      })
      .when('/supprimer_kebab', {
        templateUrl: 'views/supprimer_kebab.html',
        controller: 'RemoveCtrl',
        controllerAs: 'remove'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
