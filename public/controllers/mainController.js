app.controller('mainController', function(weatherAPI, dateCalculations, weatherCalculations, $scope){

  $scope.oneDay = true
  $scope.oneDayExpand = false
  $scope.threeDay = false
  $scope.threeDayExpand = false
  $scope.fiveDay = false
  weatherAPI.getForecast().then(function(results){
    dates = {}
    results.data.list.forEach(function(value){
      time = new Date(value.dt_txt)
      var day = time.getDay()
      day = dateCalculations.calculateDay(day)
      dates[day] = dates[day] || {}
      dates[day].fullday = dates[day].fullday || []
      dates[day].fullday.push(value)
    })
    for(day in dates) {
      dates[day].fullday.map(function(value){
        var weekDay = new Date(value.dt_txt)
        hour = weekDay.getHours()
        hour = dateCalculations.calculateHour(hour)
        dates[day]['hourly'] = dates[day]['hourly'] || {}
        dates[day]['hourly'][hour] = value
      })
    }
    $scope.weather = dates

    var daysOfWeek= Object.keys(dates).map(function(value,index){
      return value
    })
    dayOne = daysOfWeek[0]
    $scope.day = dayOne
    todaysWeather = dates[dayOne]
    $scope.currentHourly = dates[dayOne]
    var MinAndMax = weatherCalculations.getDailyMinAndMax(dates[dayOne]['hourly'])
    $scope.minAndMax= MinAndMax
    currentTemp = Object.keys(dates[dayOne]['hourly'])[0];
    $scope.currentTemp = dates[dayOne]['hourly'][currentTemp]

    var x=0
    while (x < 3) {
      var threeDayForecast = threeDayForecast || {}
      threeDayForecast[daysOfWeek[x]] = dates[daysOfWeek[x]]['hourly']
      x+=1
    }


    var y=0
    while (y < 5) {
      var fiveDayForecast = fiveDayForecast || {}
      fiveDayForecast[daysOfWeek[y]] = dates[daysOfWeek[y]]['hourly']
      y+=1
    }

    console.log(fiveDayForecast);
    $scope.threeDayForecast = threeDayForecast;
    $scope.fiveDayForecast = fiveDayForecast;

  })

  $scope.showFull= function(x) {
    $scope[x] = !$scope[x]
  }
  $scope.showForecast = function(day, falseday, otherfalseday) {

    $scope[day] = true
    $scope[falseday] = false
    $scope[otherfalseday] = false
  }
})
