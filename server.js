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


var l = new wooly.Lobby();


io.sockets.on('connection', function(socket) {

	socket.on('login', function(data) {
		var player = new wooly.Player(socket, data['username'])
		socket.set('player', player);
		l.addPlayer(player);
	});

	socket.on('chatmessage', function(data) {
		socket.get('player', function(err, player) {
			l.sendChatMessage(player, data['message'])
		});
	});

	socket.on('disconnect', function(data) {
		socket.get('player', function(err, player) {
			l.removePlayer(player);
		});
	});
	
});



server.listen(8000);