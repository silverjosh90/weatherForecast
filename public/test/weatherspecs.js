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
  it('Shows temperatures for all 3 days when 3day is clicked', function(){
    browser.get('http://localhost:8080/');
    element(by.model('extendedButton')).click()
    element(by.model('threeDayButton')).click()

    expect(element(by.css('.iconShow')).isPresent()).toBeTruthy()
    expect(element(by.css('.descriptionShow')).isDisplayed()).toBeTruthy()
    expect(element(by.css('#tempShow')).isDisplayed()).toBeTruthy()


  })

  it('3 day forecast displays hourly when expanded', function(){
    browser.get('http://localhost:8080/');
    element(by.model('extendedButton')).click()
    element(by.model('threeDayButton')).click()
    element(by.model('threeDayExpander')).click()
    expect(element(by.css('.hourlyDescription')).isDisplayed()).toBeTruthy()


  })
  it('Shows temperatures for all 5 days when 5 day is clicked', function(){
    browser.get('http://localhost:8080/');
    element(by.model('extendedButton')).click()
    element(by.model('fiveDayButton')).click()

    expect(element(by.css('#oneDayIcon')).isPresent()).toBeTruthy()
    expect(element(by.css('.dayDescription')).isDisplayed()).toBeTruthy()
    expect(element(by.css('.dayTemperature')).isDisplayed()).toBeTruthy()


  })

  it('5 day forecast displays hourly when expanded', function(){
    browser.get('http://localhost:8080/');
    element(by.model('extendedButton')).click()
    element(by.model('fiveDayButton')).click()
    element(by.model('fiveDayExpander')).click()
    expect(element(by.css('.fiveDayIcons')).isPresent()).toBeTruthy()


  })

})
