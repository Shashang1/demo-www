const {Builder} = require('selenium-webdriver')
// const chrome = require('selenium-webdriver/chrome')
const {login, cred} = require('./login') 

let driver = null;

exports.buildDriver = async() => {
  if(!driver){
    driver = new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize()
  }
  return driver;
}