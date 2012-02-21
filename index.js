require('http').createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.end(process.cwd() + '\n');
}).listen(process.env.HTTP_PORT || 8080);



