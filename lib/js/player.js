function Player(socket, playername){
	this.socket = socket;
	this.playername = playername;
}

Player.prototype.sendChatMessage = function(player, message) {
	console.log('Sending to player ' + this.playername)
	this.socket.emit('chatmessage', {player: player, 'message': message})
};

module.exports = Player;