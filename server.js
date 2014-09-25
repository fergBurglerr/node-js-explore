var http = require('http');
var port = 3333;

http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World!');
}).listen(port);

console.log('The server is running on port ' + port + '.');
