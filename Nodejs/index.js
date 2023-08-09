const fs = require("fs");

// Create a Date object to get current date and time
const date = new Date();

// Format the current date and time
const currentDateTime = date.toISOString().replace(/:/g, "-").slice(0, 19);

// Create the filename using the current date and time
const filename = `${currentDateTime}.txt`;

// Create the file and write the current timestamp as content
fs.writeFile(filename, date.toString(), (err) => {
  if (err) {
    console.error("Error creating file:", err);
    return;
  }
  console.log(`File created: ${filename}`);
});
