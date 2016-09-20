var app = angular.module('starter.controllers', [])

app.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function () {
    $auth.submitLogin($scope.loginData)
    .then(function (resp) {
      // handle success response
      $scope.closeLogin();
    })
    .catch(function (error) {
      // handle error response
      $scope.errorMessage = error;
    });
  };
});


app.controller('TestController', function($scope) {
  $scope.gender = ['Male', 'Female']
  $scope.ageValues = {
    min: 20,
    max: 60,
    value: 20
  };
  $scope.distanceValues = {
    min: 1000,
    max: 3500,
    value: 1000
  };
  $scope.data = {};
  $scope.calculateCooper = function() {
    var person = new Person({
      gender: $scope.data.gender,
      age: $scope.data.age
    });
    person.cooperResult($scope.data.distance);
    $scope.person = person;
    console.log($scope.person)
  };
});
