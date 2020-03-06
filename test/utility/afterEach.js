const { writeCoverageReportToFile } = require('./testCoverage');

exports.handleAfterEach = async (driver) => {
  const coverageInfo = await driver.executeScript('return JSON.stringify(window.__coverage__);');
  await writeCoverageReportToFile(coverageInfo);
};
