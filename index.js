const fs = require("fs");

let dataToWrite = "Some data";

fs.readFile('./demo.txt', (err, data) => {
    if (err) {
        return console.log("Something went wrong while reading the file");
    }

    dataToWrite = data.toString();
    console.log(dataToWrite);
})

fs.writeFile('./data.txt', dataToWrite, "utf-8", (err) => {
    if (err) {
        return console.log("Something went wrong", err);
    }

    console.log("File written successful");
})