const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

setDefaultTimeout(60 * 1000); // 60s por paso

Before(async function () {
  this.browser = await chromium.launch({ headless: false }); // cambia a true si no quieres ver el navegador
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  if (scenario.result?.status === 'FAILED') {
    // 📂 carpeta donde se guardarán las capturas
    const screenshotsDir = path.join(process.cwd(), 'screenshots');
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir);
    }

    // 📸 nombre único de archivo según el escenario
    const screenshotPath = path.join(
      screenshotsDir,
      `${scenario.pickle.name.replace(/\s+/g, '_')}.png`
    );

    await this.page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`✅ Screenshot guardado: ${screenshotPath}`);
  }

  if (this.browser) {
    await this.browser.close();
  }
});
