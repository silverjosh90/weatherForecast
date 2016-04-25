app.service('dateCalculations', ['$http', function ($http) {

  this.calculateDay = function(day) {
    switch (day) {
      case 0:
      return 'Sunday'
      break;

      case 1:
      return 'Monday'
      break;

      case 2:
      return 'Tuesday'
      break;

      case 3:
      return 'Wednesday'
      break;

      case 4:
      return 'Thursday'
      break;

      case 5:
      return 'Friday'
      break;

      case 6:
      return 'Saturday'
      break;

    }
  }

  this.calculateHour = function(hour) {
    switch (hour) {
      case 0:
      return '12am'
      break;

      case 3:
      return '03am'
      break;

      case 6:
      return '06am'
      break;

      case 9:
      return '09am'
      break;

      case 12:
      return '12pm'
      break;

      case 15:
      return '03pm'
      break;

      case 18:
      return '06pm'
      break;

      case 21:
      return '09pm'
      break;

    }
  }
}])
