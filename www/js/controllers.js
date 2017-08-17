angular.module('starter.controllers', [])

  .controller('NavCtrl', function($scope) {
    $scope.drawers = [
      {
        route: 'ridges',
        img: 'img/icon.png',
        text: 'Trail Guide'
      }, {
        route: 'discovery',
        img: 'img/icon.png',
        text: 'Family Discovery'
      }/*, {
        route: 'map',
        img: 'img/mapicon.png',
        text: 'Map'
      }*/
    ]
  })

  .controller('MapCtrl', function($scope) {})

  .controller('TrailsCtrl', function($scope, $ionicHistory) {
    $ionicHistory.nextViewOptions({
      disableBack: true
    })
  })

  .controller('RidgesCtrl', function($scope, Markers) {
    $scope.markers = Markers.getRidges();
  })

  .controller('RidgesMarkerCtrl', function($scope, $state, $ionicHistory, $stateParams, Markers) {
    $scope.marker = Markers.getRidges()[$stateParams.marker - 1];

    $scope.previous = function(id) {
      id = id - 1;
      if (id < 1)
        id = 38;

      $ionicHistory.nextViewOptions({
        disableAnimate: true
      });
      $ionicHistory.currentView($ionicHistory.backView());
      $state.go('app.ridgesMarker', {marker: id});
    }

    $scope.next = function(id) {
      id = id + 1;
      if (id > 38)
        id = 1;

      $ionicHistory.nextViewOptions({
        disableAnimate: true
      });
      $ionicHistory.currentView($ionicHistory.backView());
      $state.go('app.ridgesMarker', {marker: id});
    }
  })

  .controller('DisCtrl', function($scope, Markers) {
    $scope.markers = Markers.getDiscovery();
  })

  .controller('DisMarkerCtrl', function($scope, $state, $ionicHistory, $stateParams, Markers) {
    $scope.marker = Markers.getDiscovery()[$stateParams.marker - 1];

    $scope.previous = function(id) {
      id = id - 1;
      if (id < 1)
        id = 10;

      $ionicHistory.nextViewOptions({
        disableAnimate: true
      });
      $ionicHistory.currentView($ionicHistory.backView());
      $state.go('app.discoveryMarker', {marker: id});
    }

    $scope.next = function(id) {
      id = id + 1;
      if (id > 10)
        id = 1;

      $ionicHistory.nextViewOptions({
        disableAnimate: true
      });
      $ionicHistory.currentView($ionicHistory.backView());
      $state.go('app.discoveryMarker', {marker: id});
    }
  })
