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
    dayOne= Object.keys(dates)[0]
    dayTwo= Object.keys(dates)[1]
    dayThree= Object.keys(dates)[2]
    dayFour= Object.keys(dates)[3]
    dayFive= Object.keys(dates)[4]
    daySix= Object.keys(dates)[5]
    $scope.day = dayOne
    todaysWeather = dates[dayOne]
    $scope.currentHourly = dates[dayOne]
    var MinAndMax = weatherCalculations.getDailyMinAndMax(dates[dayOne]['hourly'])
    $scope.minAndMax= MinAndMax
    currentTemp = Object.keys(dates[dayOne]['hourly'])[0];
    $scope.currentTemp = dates[dayOne]['hourly'][currentTemp]

    var threeDayForecast = {
      [dayTwo] : dates[dayTwo]['hourly'],
      [dayThree] : dates[dayThree]['hourly'],
      [dayFour] : dates[dayFour]['hourly']
    }
    var fiveDayForecast = {
      [dayTwo] : dates[dayTwo]['hourly'],
      [dayThree] : dates[dayThree]['hourly'],
      [dayFour] : dates[dayFour]['hourly'],
      [dayFive] : dates[dayFive]['hourly'],
      [daySix] : dates[daySix]['hourly']
    }

    console.log(threeDayForecast);
    $scope.threeDayForecast = threeDayForecast;
    $scope.fiveDayForecast = fiveDayForecast;

    $scope.array1 = [1,3,5,6,7,8]
    $scope.array2 = ['hey','whatsup','hello']

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
