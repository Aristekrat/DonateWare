var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200);
});

server.listen(8000);
console.log("Server running at http://127.0.0.1:8000/");