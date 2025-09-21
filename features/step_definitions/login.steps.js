const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const LoginPage = require('../../pages/LoginPage');

Given('que estoy en la página principal {string}', async function (url) {
  this.loginPage = new LoginPage(this.page); // instanciamos POM
  await this.loginPage.goTo(url);
});

When('hago click en el botón de login', async function () {
  await this.loginPage.openLoginForm();
});

When('inicio sesión con username {string} y password {string}', async function (username, password) {
  await this.loginPage.login(username, password);
});

Then('debería ver en la página el texto {string}', async function (expectedText) {
  const body = await this.page.textContent('body');
  assert(body && body.includes(expectedText), `No encontré "${expectedText}" en la página`);
});

Then('debería ver el mensaje de error {string}', async function (expectedError) {
  const actualError = await this.loginPage.getErrorMessage();
  assert(actualError.includes(expectedError), `Esperaba "${expectedError}", pero encontré "${actualError}"`);
});
