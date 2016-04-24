app.controller('mainController', function(weatherAPI, dateCalculations, $scope){



  weatherAPI.getForecast().then(function(results){

    $scope.API = results.data.list


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
    console.log(dates);



    $scope.dates = dates
    $scope.sunday = dates[0]
    $scope.monday = dates[1]
    $scope.tuesday = dates[2]
    $scope.wednesday = dates[3]
    $scope.thursday = dates[4]
    $scope.friday = dates[5]
    $scope.saturday = dates[6]

  })
})
