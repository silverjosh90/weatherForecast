describe('On the Forecast page', function() {
  it('shows logo', function(){
    browser.get('http://localhost:8080/');
    expect(element(by.model('title')).getText()).toEqual('The Cast')

  })
  it('Shows 1 day forecast by default', function(){
    browser.get('http://localhost:8080/');
    expect(element(by.css('.oneDayDiv')).isDisplayed()).toBeTruthy()

  })
  it('Shows 1 day icon and High and Low', function(){
    browser.get('http://localhost:8080/');
    expect(element(by.css('#oneDayIcon')).isPresent()).toBeTruthy()
    expect(element(by.css('#oneDayHigh')).isDisplayed()).toBeTruthy()
    expect(element(by.css('#oneDayLow')).isDisplayed()).toBeTruthy()
    expect(element(by.css('#oneDayHumidity')).isDisplayed()).toBeTruthy()
    expect(element(by.css('#oneDayWind')).isDisplayed()).toBeTruthy()

  })
  it('1 day forecast expands', function(){
    browser.get('http://localhost:8080/');
    element(by.model('showFull')).click()
    expect(element(by.css('#oneDayExpand')).isDisplayed()).toBeTruthy()

  })
  it('1 day expanded forecast shows hourly weather', function(){
    browser.get('http://localhost:8080/');
    element(by.model('showFull')).click()
    expect(element(by.css('.hourlyCast')).isDisplayed()).toBeTruthy()

  })
  it('Shows temperatures for all 3 days', function(){
    browser.get('http://localhost:8080/');
    element(by.model('threeDayButton')).click()
    expect(element(by.css('.iconShow')).isPresent()).toBeTruthy()
    expect(element(by.css('.descriptionShow')).isDisplayed()).toBeTruthy()
    expect(element(by.css('.temperatureShow')).isDisplayed()).toBeTruthy()


  })
  // it('Displays 3-day forecast and no other when 3 day Is clicked', function(){
  //   browser.get('http://localhost:8080/');
  //   element(by.css('#threeDayButton')).click()
  //   expect(element(by.model('oneDay')).isDisplayed().toBeFalsy()
  //   expect(element(by.model('threeDay')).isDisplayed().toBeTruthy()
  //   expect(element(by.model('fiveDay')).isDisplayed().toBeFalsy()
  //
  // })
  // it('3 day forecast expands', function(){
  //   browser.get('http://localhost:8080/');
  //   element(by.css('#threeDayExpand')).click()
  //   expect(element(by.model('threeDayFull')).isDisplayed().toBeTruthy()
  //
  //
  // })
  // it('Displays 5-day forecast and no other when 5 day Is clicked', function(){
  //   browser.get('http://localhost:8080/');
  //   element(by.css('#fiveDayButton')).click()
  //   expect(element(by.model('oneDay')).isDisplayed().toBeFalsy()
  //   expect(element(by.model('threeDay')).isDisplayed().toBeFalsy()
  //   expect(element(by.model('fiveDay')).isDisplayed().toBeTruthy()
  //
  // })
  // it('5 day forecast expands', function(){
  //   browser.get('http://localhost:8080/');
  //   element(by.css('#fiveDayExpand')).click()
  //   expect(element(by.model('fiveDayFull')).isDisplayed().toBeTruthy()
  //
  //
  // })
  // it('forecast expands when expand forecast is clicked', function(){
  //   browser.get('http://localhost:8080/');
  //   element(by.css('#threeDayButton')).click()
  //   expect(element(by.model('threeDay')).isDisplayed().toBeTruthy()
  //   expect(element(by.model('oneDay')).isDisplayed().toBeFalsy()
  //   expect(element(by.model('fiveDay')).isDisplayed().toBeFalsy()
  //
  // })
})
