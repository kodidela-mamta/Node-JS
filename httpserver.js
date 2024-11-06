const http = require("http");

const port =  3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(
    "<h1>This is codewithmamta </h1><p>this is the way to rock the world</p>"
  );
});

server.listen(port, () => {
  console.log(`server is listening port ${port}`);
});
