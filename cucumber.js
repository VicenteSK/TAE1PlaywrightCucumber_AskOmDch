module.exports = {
  default: `
    --require ./features/step_definitions/**/*.js
    --require ./features/support/**/*.js
    --publish-quiet
    --format json:allure-results/cucumber-report.json
  `
};