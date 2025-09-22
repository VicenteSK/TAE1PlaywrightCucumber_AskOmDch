const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const StorePage = require('../../pages/StorePage');

Given('que el usuario ha iniciado sesión con username {string} y password {string}', async function (username, password) {
  const loginPage = new LoginPage(this.page);
  await loginPage.goTo('https://askomdch.com/');
  await loginPage.openLoginForm();
  await loginPage.login(username, password);
});

Given('está en la página {string}', async function (pagina) {
  if (pagina === 'Store') {
    const storePage = new StorePage(this.page);
    await storePage.gotoStore();
    this.storePage = storePage;
  }
});

When('ingresa {string} en la caja de búsqueda', async function (producto) {
  await this.storePage.searchProduct(producto);
});

When('hace click en el botón de búsqueda', async function () {
  // ya se ejecuta dentro de searchProduct
});

Then('debería ver el mensaje {string}', async function (mensajeEsperado) {
  const mensaje = await this.storePage.getResultsMessage();
  expect(mensaje.trim()).toBe(mensajeEsperado); // ✅ usando @playwright/test
});
