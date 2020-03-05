const {By, until} = require('selenium-webdriver')


exports.cred = {username:"KhalDrogo", password:"43210000"}

exports.login = async(driver, cred) => {
  await driver.get('http://localhost:3000/')
  await driver.manage().window().maximize();
  await driver.sleep(1000)
  await driver.wait(until.elementLocated(By.id("username")),2000)
  await driver.findElement(By.id("username")).sendKeys("KhalDrogo")
  await driver.wait(until.elementLocated(By.id("password")),2000)
  await driver.findElement(By.id("password")).sendKeys("43210000")
  await driver.sleep(1000)
  await driver.findElement(By.id("loginButton")).click()
  await driver.wait(until.urlIs('http://localhost:3000/dashboard'),2000)
  await driver.sleep(1000)
}