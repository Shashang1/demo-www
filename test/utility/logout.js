const {until, By} = require('selenium-webdriver')


exports.logout = async(driver) =>{
  await driver.sleep(500)
  await driver.wait(until.elementLocated(By.id("logout")))
  await driver.findElement(By.id("logout")).click()
}