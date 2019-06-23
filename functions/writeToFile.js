const fs = require("fs");

function writeToFile(obj, fileName) {
  let dataToWrite = JSON.stringify(obj, null, 2);
  fs.writeFile(fileName, dataToWrite, err => {
    if (err) throw err;
    console.log("Data written to file");
  });
}

export default writeToFile;
