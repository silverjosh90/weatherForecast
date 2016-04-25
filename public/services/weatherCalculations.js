
app.service('weatherCalculations', ['$http', function ($http) {
    this.getDailyMinAndMax= function(object){
      minTemps = []
      maxTemps = []
      for(key in object) {
        minTemps.push(object[key]['main']['temp_min'])
        maxTemps.push(object[key]['main']['temp_max'])
      }
      var min = Math.min.apply(null,minTemps)
      var max = Math.max.apply(null,maxTemps)
      var temperatures = { minimum: min, maximum: max}
      return temperatures
    }

}])
