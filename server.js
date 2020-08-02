const http = require('http');

console.log(process.env)

var hostname = process.env['hostname'] || '127.0.0.1';
var port = process.env['PORT'] || 8011;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port=port, callback=() => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
