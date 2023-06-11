// inspired by https://heintz-s.github.io/GIS/lecture/server-request/6 and https://flaviocopes.com/node-serve-html-page/
const http = require("http");
const fs = require('fs');

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  fs.createReadStream('index.html').pipe(res);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
