function Tennis() {
	this.player_values = [0,0];
}

Tennis.prototype.PLAYER_A = 0;
Tennis.prototype.PLAYER_B = 1;
Tennis.prototype.getScore = function() {
	return "Player A " +  this.player_values[this.PLAYER_A] + " - Player B "+ this.player_values[this.PLAYER_B];
};
Tennis.prototype.score = function(player) {
	this.player_values[player] += 15;
};
