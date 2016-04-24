var app= angular.module('forecastApp', ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
  templateUrl: 'partials/forecast.html',
  controller: 'mainController'
})
})
