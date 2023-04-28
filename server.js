const http = require('http');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const server = http.createServer((req, res) => {
  const filePath = path.join(publicDir, req.url);
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      console.log(`File not found: ${filePath}`);
      return;
    }
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
    console.log(`Serving file: ${filePath}`);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
