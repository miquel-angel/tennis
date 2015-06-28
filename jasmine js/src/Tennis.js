function Tennis() {
	this.player_message = "Player A 0 - Player B 0"
}

Tennis.prototype.PLAYER_A = 1;
Tennis.prototype.PLAYER_B = 2;
Tennis.prototype.getScore = function() {
	return this.player_message;
};
Tennis.prototype.score = function(player) {
	this.player_message = "Player A 15 - Player B 15"
};
