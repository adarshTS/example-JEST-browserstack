const { Builder, By, Key, until } = require('selenium-webdriver');
test('Sign In Test', async () => {
    // Set up Selenium WebDriver
    const driver = new Builder().forBrowser('chrome').build();
    try {
      // Navigate to a webpage
      await driver.get('https://bstackdemo.com/');


      // Find the sign-in button and click on it
      await driver.findElement(By.css("#signin")).click();


      //Wait for Username visibility and then click on it
      await driver.wait(until.elementLocated(By.id("username"))).click();


      //Select User name from dropdown
      await driver.findElement(By.css('#react-select-2-option-0-0')).click();


      //Click on Password and select password from Dropdown
      await driver.findElement(By.id('password')).click();
      await driver.findElement(By.css('#react-select-3-option-0-0')).click();


      //Click on Log In Button
      await driver.findElement(By.id('login-btn')).click();


      //Wait for logout button and assert its visibilty
      await driver.wait(until.elementLocated(By.css("#logout"))).isDisplayed();


    } finally {
      // Close the browser
      await driver.quit();
    }
  });
