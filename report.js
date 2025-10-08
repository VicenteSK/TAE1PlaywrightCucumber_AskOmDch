const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber-report.json', // archivo JSON generado por Cucumber
  output: 'reports/cucumber-report.html',   // aquí se genera el HTML
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
      "App Version":"1.0.0",
      "Test Environment": "QA",
      "Browser": "Chrome",
      "Platform": process.platform,
      "Executed": "Local"
  }
};

reporter.generate(options);
