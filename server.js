// Require the dependencies

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end("Hello World!!  I am Sharknato!!!");
}).listen(3000);

console.log('Server started on Port 3000.')