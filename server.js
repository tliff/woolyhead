var http = require('http');

var wooly = require('./lib/js/wooly_head')

var nodeStatic = require('node-static');
var staticServer = new(nodeStatic.Server)('./public');

var io = require('socket.io').listen(8001);


var server = http.createServer(function(req, res) {
	req.addListener('end', function() {
		if(req.url == '/config.json'){
			res.writeHead(200, {
				'Content-Type': 'application/json'
			});
			res.end(JSON.stringify({'Penis': 'seppl'}));
		} else {
			staticServer.serve(req, res);
		}
	});
});

io.sockets.on('connection', function(socket) {
	socket.on('login', function(data) {
		console.log("Player logging in, name is" + data['username']);
		socket.emit('player_login', {username: data['username']})
	});
});

var p = new wooly.Player('tliff');
var l = new wooly.Lobby();


server.listen(8000);