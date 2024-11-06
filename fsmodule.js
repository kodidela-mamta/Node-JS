const fs = require("fs");
fs.readFile("file.txt", "utf8", (err, data) => {
  console.log(err, data);
});
console.log("finished file data reading"); // it prints first because readfile is having callback which executes once reading of file is ready

const aa = fs.readFileSync("file.txt");
console.log(aa.toString()); //here file content prints first because node js purposefully block code to run first
console.log("finished file data reading");

fs.writeFile("file2.txt", "this is new file data", () => {
  console.log("written to file");
});
console.log("finished writing data to file2"); // it prints first because readfile is having callback which executes once reading of file is ready

const bb = fs.writeFileSync("file.txt", "this is sync data for file2");
console.log(bb); //here file content prints first because node js purposefully block code to run first
console.log("finished writing data to file2");
