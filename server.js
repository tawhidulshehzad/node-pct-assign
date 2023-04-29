const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url == "/" || req.url == "/home") {
    fs.readFile("./public/home.html", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("Not Found");
        res.end("");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end("");
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("404 Not Found");
    res.end("");
  }
});

server.listen(port, () => {
  console.log("Server listening on port 3000");
});
