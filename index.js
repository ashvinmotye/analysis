const data = require("./extracted.json");

import writeToFile from "./functions/writeToFile";
import initialiseNumberData from "./functions/initialiseNumberData";
import populateAnalysis from "./functions/populateAnalysis";

// initialise with default object
let numberData = initialiseNumberData();

// analyse data
let analysedData = populateAnalysis(data, numberData);

// write number data to results.json
writeToFile(analysedData, "results.json");
