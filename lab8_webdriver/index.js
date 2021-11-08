const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')



describe('test 10 minutes', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
        driver = await new Builder().forBrowser('firefox').build()
        vars = {}
    })
    afterEach(async function() {
       // await driver.quit();
    })
    it('test 10 minutes', async function() {
        await driver.get("https://pastebin.com/")
        await driver.manage().window().setRect(1084, 696)
        await driver.executeScript("window.scrollTo(0,460.79998779296875)")
        await driver.findElement(By.id("postform-text")).sendKeys("Hello from WebDriver")
        await driver.findElement(By.id("select2-postform-expiration-container")).click()
        await driver.findElement(By.id("postform-name")).click()
        await driver.executeScript("window.scrollTo(0,777.5999755859375)")
        await driver.findElement(By.id("postform-name")).sendKeys("helloweb")
        await driver.findElement(By.css(".-big")).click()
       // await driver.close()
    })
})
