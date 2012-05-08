var socket = io.connect('http://localhost:8001');
var name = 'user' + Math.floor(Math.random()*10000);

socket.emit('login', { username: name });

$('.username').text(name + ':');

$('#inputbox').submit(function(data) {
	socket.emit('chatmessage', {message: $('#inputbox #message').val()})
	$('#inputbox #message').val('');
	
	return false;
});


socket.on('chatmessage', function (data) {
	$('#chat').append('<li><em>' + data['player'] + '</em> ' + data['message'] + '</li>');
});

socket.on('disconnect', function(){
	setTimeout(function() {
		window.location.reload();
	}, 500);
});