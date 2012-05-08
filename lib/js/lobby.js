function Lobby() {
	this.players = new Array(0);
}

Lobby.prototype.addPlayer = function(p){
	this.players.push(p);
}

Lobby.prototype.removePlayer = function(p){
	this.players = this.players.filter(function(elem) {
		elem != p;
	});
	console.log('remove called');
}

module.exports = Lobby;