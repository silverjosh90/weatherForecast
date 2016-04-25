
  app.service('weatherAPI', ['$http', function ($http) {
    this.getForecast = function() {
      return $http.get('http://api.openweathermap.org/data/2.5/forecast/city?id=4366001&units=Imperial&APPID=aa6b6c3b7368a67bb42ebaf2dddb5fba')
    }
    this.getCurrentWeather = function() {
      return $http.get('http://api.openweathermap.org/data/2.5/weather?q=potomac,us&units=Imperial&APPID=aa6b6c3b7368a67bb42ebaf2dddb5fba')
    }

  }])
