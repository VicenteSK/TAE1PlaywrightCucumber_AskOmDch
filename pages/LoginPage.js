class LoginPage {
  constructor(page) {
    this.page = page;
    // selectores
    this.accountBtn = '#menu-item-1237 > a';
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.loginBtn = '#customer_login > div.u-column1.col-1 > form > p:nth-child(3) > button';
    this.errorMessage = '#post-1235 > div > div.wp-block-group.alignfull > div > div.woocommerce > div.woocommerce-notices-wrapper > ul';
  }

  async goTo(url) {
    await this.page.goto(url);
  }

  async openLoginForm() {
    await this.page.click(this.accountBtn);
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginBtn);
  }

  async getErrorMessage() {
    return await this.page.textContent(this.errorMessage);
  }
}

module.exports = LoginPage;
