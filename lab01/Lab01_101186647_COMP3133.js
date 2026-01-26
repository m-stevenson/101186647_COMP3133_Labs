// Run with node Lab01_101186647_COMP3133.js
import fs from "fs";
import csv from "csv-parser";

const path = "input_countries.csv";
const canadaFile = "canada.txt";
const usaFile = "usa.txt";

// a. Delete canada.txt and usa.txt if already exists using fs module
if (fs.existsSync(canadaFile)) fs.unlinkSync(canadaFile);
if (fs.existsSync(usaFile)) fs.unlinkSync(usaFile);

fs.createReadStream(path)
  .pipe(csv())
  .on("data", ({ country, year, population }) => {
    // b. Filter data of Canada and write data to canada.txt
    if (country === "Canada") {
      fs.appendFileSync(canadaFile, `${country}, ${year}, ${population}\n`);
    }
    // c. Filter data of United States and write data to usa.txt
    if (country === "United States") {
      fs.appendFileSync(usaFile, `${country}, ${year}, ${population}\n`);
    }
  });
