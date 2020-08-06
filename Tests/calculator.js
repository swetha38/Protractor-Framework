let homepage = require('../Pages/homepage');


describe('demo calculator tests', function () {

  it('add test', function () {


    homepage.get('http://juliemr.github.io/protractor-demo/');


    homepage.enterfirstNumber('4');


    homepage.enterSecondNumber('3');


    homepage.clickGo();


    homepage.verifyResult('7');

    browser.sleep(2000)



  });

  
  it('sub test', function () {


    homepage.get('http://juliemr.github.io/protractor-demo/');


    homepage.enterfirstNumber('4');


    homepage.enterSecondNumber('3');


    homepage.clickGo1();


    homepage.verifyResult('7');

    browser.sleep(2000)



  });

});