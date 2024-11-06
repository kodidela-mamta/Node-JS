const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    if (req.url == "/") {
        res.statusCode = 200;
        res.end( "<h1>This is Node js </h1><p>this is the way to rock the world</p>");
    } else if (req.url == "/about") {
        res.statusCode = 200;
        res.end("<h1>About Node js </h1><p>this is the about code</p>");
    } else {
        res.statusCode = 404;
        res.end("<h1>Not Found </h1><p>this page not found on server</p>");
    }
});

server.listen(port, () => {
    console.log(`server is listening port ${port}`);
});
