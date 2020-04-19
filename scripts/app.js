var app = angular.module('cv-rute', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider


    .when('/', {
        templateUrl : 'pages/eu.html',
        controller  : 'EuController'
      })
    
      .when('/eu', {
        templateUrl : 'pages/eu.html',
        controller  : 'EuController'
      })
    
      .when('/vida-diaria', {
        templateUrl : 'pages/vida-diaria.html',
        controller  : 'VidaDiariaController'
      })
    

      .when('/hobbies', {
        templateUrl : 'pages/hobbies.html',
        controller  : 'HobbiesController'
      })



      .otherwise({redirectTo: '/'});
    });
    

    app.controller('EuController', function($scope) {
      $scope.message = 'Hello from Eu';
    });
    
    app.controller('VidaDiariaController', function($scope) {
      $scope.message = 'Hello from Vida Diária';
    });
    
    app.controller('HobbiesController', function($scope) {
      $scope.message = 'Hello from Hobbies';
    });
