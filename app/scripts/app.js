'use strict';

/**
 * @ngdoc overview
 * @name uiRouterPlaygroundApp
 * @description
 * # uiRouterPlaygroundApp
 *
 * Main module of the application.
 */
angular
  .module('uiRouterPlaygroundApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('main', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })       
        .state('main.gasto', {
            url: 'gasto',
            templateUrl: 'views/gasto/mainGasto.html'
        })
        .state('main.gasto.list', {
            url: '/list',
            templateUrl: 'views/gasto/partials/list.html'
        })
        .state('main.gasto.new', {
            url: '/new',
            templateUrl: 'views/gasto/partials/new.html'
        })
        .state('main.gasto.edit', {
            url: '/edit',
            templateUrl: 'views/gasto/partials/edit.html'
        });
        
    $urlRouterProvider.otherwise('/');
  });
