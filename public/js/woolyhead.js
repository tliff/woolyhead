var socket = io.connect('http://localhost:8001');
socket.emit('login', { username: 'tliff' });

socket.on('player_login', function (data) {
	console.log('Another player logged in ' + data['username'])
});
