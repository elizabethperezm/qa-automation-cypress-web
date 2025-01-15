// Encapsulation Example: Grouping related data and methods
class WebElement {
  constructor(locator) {
    this.locator = locator; // Encapsulating locator property
  }

  click() {
    console.log(`Clicking element with locator: ${this.locator}`);
  }

  getText() {
    console.log(`Getting text of element with locator: ${this.locator}`);
    return "Sample Text"; // Simulating returned text
  }
}

// Abstracting LoginPage details
class LoginPage {
  constructor() {
    this.usernameField = new WebElement("#username");
    this.passwordField = new WebElement("#password");
    this.loginButton = new WebElement("#loginButton");
  }

  // Abstracted method hides internal complexity
  login(username, password) {
    console.log("Performing login...");
    this.usernameField.click();
    console.log(`Typing username: ${username}`);
    this.passwordField.click();
    console.log(`Typing password: ${password}`);
    this.loginButton.click();
  }
}

// Using Encapsulation and Abstraction
const loginPage = new LoginPage();
loginPage.login("testUser", "testPassword");

// Output:
// Performing login...
// Clicking element with locator: #username
// Typing username: testUser
// Clicking element with locator: #password
// Typing password: testPassword
// Clicking element with locator: #loginButton
