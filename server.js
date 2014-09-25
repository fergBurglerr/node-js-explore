var http = require('http');
var port = 3333;
var serveFile = require('./serveFile.js');

http.createServer(function (req, res){
	console.log(req.headers);	
	console.log(req.method);
	console.log(req.url);

	if (req.method == "GET"){
		serveFile(req, res);
	} 
}).listen(port);

console.log('The server is running on port ' + port + '.');
