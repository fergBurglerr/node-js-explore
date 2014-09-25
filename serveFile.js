var fs = require('fs');
var isDir = new RegExp(/\/$/);

module.exports = function(req, res){
	if (isDir.test(req.url)) req.url += 'index.html';

	var fileStream = fs.createReadStream('.'+req.url);
	fileStream.on('error', function(error){
		res.writeHead(404, {'Content-Type': 'application/json'});
		res.end(JSON.stringify({message: "404 Error: couldn't load " + req.url}));
	});
	fileStream.on('readable', function(){
		var contentType = 'text/html';
		if (/\.css$/.test(req.url)) contentType = 'text/css';
		if (/\.jpg$/.test(req.url)) contentType = 'image/jpeg';
		if (/\.png$/.test(req.url)) contentType = 'image/png';

		res.writeHead(200, {'Content-Type': contentType});
		fileStream.pipe(res);
	});
}
