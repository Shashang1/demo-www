const {By, until} = require('selenium-webdriver')


exports.cred = {username:"KhalDrogo", password:"43210000"}

exports.login = async(driver, cred) => {
  await driver.get('http://localhost:3000/')
  await driver.manage().window().maximize();
  await driver.sleep(500)
  await driver.wait(until.elementLocated(By.id("username")),2000)
  await driver.findElement(By.id("username")).sendKeys(cred.username)
  await driver.wait(until.elementLocated(By.id("password")),2000)
  await driver.findElement(By.id("password")).sendKeys(cred.password)
  await driver.sleep(500)
  await driver.findElement(By.id("loginButton")).click()
}

