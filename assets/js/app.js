console.log('connected');

var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/home',{
    templateUrl: '../../views/landing.html',
    controller: 'searchCtrl'
  })
  .when('/results',{
    templateUrl: '../../views/results.html',
    controller: 'searchController'
  })
  .when('/individual_result',{
    templateUrl: '../../views/individualResult.html',
  })
  .otherwise({
    redirectTo: 'home'
  });
});
