const path = require("path");
const a1 = path.basename("c://temp//myfile.html");
const a2 = path.dirname("c://temp//myfile.html");
console.log(a1);
console.log(a2);
const a3 = path.extname(__filename);
console.log(a3);
