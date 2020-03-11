const chai = require('chai')
const {buildDriver} = require('./utility/buildDriver')
const {By, until} = require('selenium-webdriver')
const search = require('./utility/filter')
const {login, cred } = require('./utility/login')
const {logout} = require('./utility/logout')

describe("Full Testing", ()=>{
  before(async()=>{
    driver = await buildDriver()
  })
  it('login', async()=>{
    await login(driver, cred)
    await driver.wait(until.urlIs('http://localhost:3000/dashboard'),2000)
    await driver.sleep(500)
  })

  it('dash-user-check', async()=>{
    await driver.wait(until.elementLocated(By.id(cred.username+"-username")))
    const data = await driver.findElement(By.id(cred.username+"-username")).getText()
    chai.expect(data).to.be.equal(cred.username)
  })

  it("Cookie message check", async()=>{
    await driver.wait(until.elementLocated(By.id(("cookieButton"))))
    await driver.findElement(By.id("cookieButton")).click()
    await driver.sleep(500)
  })
  it('history-check', async()=>{
    await driver.wait(until.elementLocated(By.id("menuButton")),2000)
    await driver.findElement(By.id("menuButton")).click()
    await driver.sleep(1000)
    await driver.wait(until.elementLocated(By.id("history-link")))
    await driver.findElement(By.id("history-link")).click()
    await driver.sleep(500)
    await driver.wait(until.elementLocated(By.id("date"),2000))
    await driver.findElement(By.id("date")).sendKeys("10032020")
    await driver.sleep(500)
    await driver.findElement(By.id("applyButton")).click()
    await driver.wait(until.elementLocated(By.className("loginhistory-item")),2000)
    const login = await driver.findElement(By.className("loginhistory-item")).getText()
    chai.expect(new Date(login).toLocaleDateString()).to.be.equal("03/10/2020")
    await driver.wait(until.elementLocated(By.className("logouthistory-item")),2000)
    const logout = await driver.findElement(By.className("logouthistory-item")).getText()
    await driver.sleep(500)
    chai.expect(new Date(logout).toLocaleDateString()).to.be.equal("03/10/2020")
  })

  it('search-check', async()=>{
    await driver.wait(until.elementLocated(By.id("menuButton")),2000)
    await driver.findElement(By.id("menuButton")).click()
    await driver.sleep(500)
    await driver.wait(until.elementLocated(By.id("search-link")),2000)
    await driver.findElement(By.id("search-link")).click()
    await driver.sleep(1000)
    await search.setFilter(driver, "worksAt-select", "list-Bestpeers")
    await search.setFilter(driver, "position-select", "list-SoftwareTrainee")
    await driver.wait(until.elementLocated(By.id("applyButton")))
    await driver.findElement(By.id("applyButton")).click()
    await driver.sleep(100)
    await driver.wait(until.elementLocated(By.id("search-bar")),2000)
    await driver.findElement(By.id("search-bar")).sendKeys("Shubham")
    await driver.sleep(500)
    await driver.wait(until.elementLocated(By.id("0-button")))
    await driver.findElement(By.id("0-button")).click()
    await driver.wait(until.elementLocated(By.id("Shubham-position")),2000)
    let data = await driver.findElement(By.id("Shubham-position")).getText()
    data = data.split(" ")
    let works = data[data.length-1]
    await chai.expect(works).to.be.equal("Bestpeers")
  })

  it('seen-check', async()=>{
    await driver.wait(until.elementLocated(By.id("menuButton")),2000)
    await driver.findElement(By.id("menuButton")).click()
    await driver.sleep(200)
    await driver.wait(until.elementLocated(By.id("seen-link")),2000)
    await driver.findElement(By.id("seen-link")).click()
    await driver.sleep(100)
    await driver.wait(until.elementLocated(By.className("list")),2000)
    const list = await driver.findElements(By.className("list"))
    chai.expect(list.length).to.be.equal(12)
    const data = (await driver.findElement(By.className("list")).getText()).split(" ")[0]
    await driver.sleep(500)
    await driver.findElement(By.className("list")).click()
    await driver.wait(until.elementLocated(By.id(data+"-username")),2000)
    const username = await driver.findElement(By.id(data+"-username")).getText()
    chai.expect(username).to.be.equal(data)
  })

  it('logout', async()=>{
    await logout(driver);
    await driver.wait(until.urlIs("http://localhost:3000/"))
  })
})

