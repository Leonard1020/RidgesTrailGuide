// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'NavCtrl'
  })

  .state('app.trails', {
    url: '/trails',
    views: {
      'menuContent': {
        templateUrl: 'templates/trails.html',
        controller: 'TrailsCtrl'
      }
    }
  })

  .state('app.ridges', {
      url: '/ridges',
      views: {
        'menuContent': {
          templateUrl: 'templates/list-ridges.html',
          controller: 'RidgesCtrl'
        }
      }
    })

    .state('app.ridgesMarker', {
        url: '/ridges/:marker',
        views: {
          'menuContent': {
            templateUrl: 'templates/marker-ridges.html',
            controller: 'RidgesMarkerCtrl'
          }
        }
      })

    .state('app.discovery', {
        url: '/discovery',
        views: {
          'menuContent': {
            templateUrl: 'templates/list-discovery.html',
            controller: 'DisCtrl'
          }
        }
      })

      .state('app.discoveryMarker', {
          url: '/discovery/:marker',
          views: {
            'menuContent': {
              templateUrl: 'templates/marker-discovery.html',
              controller: 'DisMarkerCtrl'
            }
          }
        })

    .state('app.map', {
      url: '/map',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html',
          controller: 'MapCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/trails');
});
