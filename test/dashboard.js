const chai = require('chai')
const {buildDriver} = require('./utility/buildDriver')
const {By, until} = require('selenium-webdriver')
const search = require('./utility/search')


describe("Login", ()=>{
  before(async()=>{
    driver = await buildDriver()
  })
  it('dash-user-check', async()=>{
    await driver.wait(until.elementLocated(By.id("KhalDrogo-username")))
    const data = await driver.findElement(By.id("KhalDrogo-username")).getText()
    chai.expect(data).to.be.equal("KhalDrogo")
  })
  it('history-check', async()=>{
    await driver.wait(until.elementLocated(By.id("menuButton")),2000)
    await driver.findElement(By.id("menuButton")).click()
    await driver.sleep(1000)
    await driver.wait(until.elementLocated(By.id("history-link")))
    await driver.findElement(By.id("history-link")).click()
    await driver.wait(until.elementLocated(By.className("historylist")),2000)
    const data = await driver.findElement(By.className("historylist")).getText()
    await driver.sleep(500)
    chai.expect(data).to.be.not.equal("")
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
    chai.expect(works).to.be.equal("Bestpeers")
  })

  it('seen-check', async()=>{
    await driver.wait(until.elementLocated(By.id("menuButton")),2000)
    await driver.findElement(By.id("menuButton")).click()
    await driver.sleep(200)
    await driver.wait(until.elementLocated(By.id("seen-link")),2000)
    await driver.findElement(By.id("seen-link")).click()
    await driver.sleep(100)
    await driver.wait(until.elementLocated(By.className("list")),2000)
    const data = (await driver.findElement(By.className("list")).getText()).split(" ")[0]
    await driver.sleep(500)
    await driver.findElement(By.className("list")).click()
    await driver.wait(until.elementLocated(By.id(data+"-username")),2000)
    const username = await driver.findElement(By.id(data+"-username")).getText()
    chai.expect(username).to.be.equal(data)
  })

  it('logout', async()=>{
    await  driver.sleep(500)
    await driver.wait(until.elementLocated(By.id("logout")))
    await driver.findElement(By.id("logout")).click()
    await driver.wait(until.urlIs("http://localhost:3000/"))
  })
})

