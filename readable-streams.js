const fs = require("fs");
const readline = require("readline");

// Open the file in read-only mode
const stream = fs.createReadStream("file.txt", { encoding: "utf8" });

// Use the readline module to create a readable stream
const reader = readline.createInterface({ input: stream });

// Read the file line by line
reader.on("line", (line) => {
	console.log(line);
});

// Close the file when we're done reading it
reader.on("close", () => {
	console.log("Finished reading file.");
});
