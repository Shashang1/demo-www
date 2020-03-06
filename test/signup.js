const chai = require('chai')
const {buildDriver} = require('./utility/buildDriver')
const {By, until} = require('selenium-webdriver')
const {setFilter} = require('./utility/filter')
const {deleteUser} = require('./utility/deleteUser')
const {handleAfterEach} = require('./utility/afterEach')
const {login} = require('./utility/login')
const {logout} = require('./utility/logout')
const newUser = {
  uname:"TEST112233",
  pass:"TEST112233",
  conPass:"TEST112233",
  fname:"TEST112233",
  lname:"TEST112233",
  mode:"Normal",
  worksAt:"Bestpeers",
  position:"SoftwareTrainee"
}


describe("Signup Test ",()=> {
  let driver;
  before(async()=>{
    driver = await buildDriver()
  })

  it("nav-to-Signup", async()=>{
    await driver.wait(until.elementLocated(By.id("menuButton")),2000)
    await driver.findElement(By.id("menuButton")).click()
    await driver.sleep(500)
    await driver.wait(until.elementLocated(By.id("signup-link")))
    await driver.findElement(By.id("signup-link")).click()
  })
  it("Signup-form-submit", async()=>{
    await driver.sleep(300)
    await driver.wait(until.elementLocated(By.id("uname")),2000)
    await driver.findElement(By.id("uname")).sendKeys(newUser.uname)
    await driver.wait(until.elementLocated(By.id("pass")),2000)
    await driver.findElement(By.id("pass")).sendKeys(newUser.pass)
    await driver.wait(until.elementLocated(By.id("con-pass")),2000)
    await driver.findElement(By.id("con-pass")).sendKeys(newUser.conPass)
    await driver.findElement(By.id("fname")).sendKeys(newUser.fname)
    await driver.findElement(By.id("lname")).sendKeys(newUser.lname)
    await setFilter(driver, "mode-select", "list-"+newUser.mode)
    await setFilter(driver, "worksAt-select", "list-"+newUser.worksAt)
    await setFilter(driver, "position-select", "list-"+newUser.position)
    await driver.findElement(By.id("signupButton")).click()
    await driver.wait(until.elementLocated(By.id("signup-successful-message")),2000)
  })
  it("Login with new user", async()=>{
    await driver.sleep(300)
    await driver.wait(until.elementLocated(By.id("menuButton")),2000)
    await driver.findElement(By.id("menuButton")).click()
    await driver.sleep(300)
    await driver.wait(until.elementLocated(By.id("login-link")),2000)
    await driver.findElement(By.id("login-link")).click()
    await driver.sleep(300)
    await login(driver, {username:newUser.uname, password:newUser.pass})
  })

  it("logout new user", async()=>{
    await driver.sleep(400)
    await logout(driver)
    await deleteUser(newUser.username, newUser.password)
    await driver.wait(until.urlIs("http://localhost:3000/"))
  })
})
