function Lobby() {
	this.players = new Array(0);
}

Lobby.prototype.addPlayer = function(p){
	this.players.push(p);
	this.broadcast(p.playername + " logged in");
}

Lobby.prototype.removePlayer = function(p){
	this.players = this.players.filter(function(elem) {
		return elem != p;
	});
	if(p){
		this.broadcast(p.playername + " logged out");
	} else {
		this.broadcast("Something happened");
	}
	
}

Lobby.prototype.broadcast = function(message){
	for(var i = 0; i < this.players.length; i++){
		this.players[i].sendChatMessage('SERVER', message);
	}

}

Lobby.prototype.sendChatMessage = function(player, message){
	for(var i = 0; i < this.players.length; i++){
		this.players[i].sendChatMessage(player.playername, message);
	}
}


module.exports = Lobby;