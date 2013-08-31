var express = require('express');
var http = require('http');
var app = express();

app.get('/', function(req, res) {
	res.send('hello world');
});

http.createServer(app).listen(8000);
console.log("Server running at http://127.0.0.1:8000/");

/*var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200);
});

server.listen(8000);
console.log("Server running at http://127.0.0.1:8000/");

// Backers Total 
/*
function BackersCalcMaster() {

var BackersCalc = function() {
	var TotalBackers = ["Brian"];
	TotalBackers.push(orders.id);
};


}

// Bitcoin Total 
/*
var bitCoin = (total_BTC / 100000000); */