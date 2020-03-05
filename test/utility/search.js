const {until, By} = require('selenium-webdriver')

exports.setFilter = async(driver, id, select_id) =>{
  await driver.wait(until.elementLocated(By.id(id)),2000)
  await driver.findElement(By.id(id)).click()
  await driver.sleep(500)
  await driver.wait(until.elementLocated(By.id(select_id)))
  await driver.findElement(By.id(select_id)).click()
}