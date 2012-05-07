function Lobby() {
	this.players = new Array(0);
}

function Lobby.prototype.addPlayer(p){
	this.players.push(p);
}

function Lobby.prototype.removePlayer(p){
	this.players = this.players.filter(function(elem) {
		elem != p;
	});
}