'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
angular
  .module('yapp', [
    'ui.router',
    'ngAnimate'
  ])
  .config(function($stateProvider, $urlRouterProvider,$httpProvider) {

    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";

    // $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/create');

    $stateProvider
        .state('base', {
          abstract: true,
          url: '',
          templateUrl: 'views/base.html'
        })
        .state('create',{
          url:'/create',
          parent:'base',
          templateUrl:'views/create.html',
          controller:'CreateCtrl'
        })
        .state('join',{
          url:'/join/:meetingId',
          parent:'base',
          templateUrl:'views/join.html',
          controller:'JoinCtrl'
        })
        .state('meeting',{
          url:'/meeting/:meetingId',
          parent:'base',
          templateUrl:'views/meeting.html',
          controller:'MeetingCtrl'
        })
        .state('overview', {
          url: '/overview',
          parent: 'dashboard',
          templateUrl: 'views/dashboard/overview.html'
        })
        .state('reports', {
          url: '/reports',
          parent: 'dashboard',
          templateUrl: 'views/dashboard/reports.html'
        });

  });
