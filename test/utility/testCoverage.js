const fs = require('fs');

exports.writeCoverageReportToFile = function (coverageInfo) {
  const timestamp = Date.now();
  return new Promise(function (resolve, reject) {
    if (!fs.existsSync('.nyc_output')) {
      fs.mkdirSync('.nyc_output');
    }
    fs.writeFile(`.nyc_output/coverage${timestamp}.json`, coverageInfo, (err) => {
      if (err) reject(err);
      resolve();
   });
  });
};
// comment