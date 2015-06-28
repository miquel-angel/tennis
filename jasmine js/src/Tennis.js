function Tennis() {
	this.player_values = [0,0];
}

Tennis.prototype.PLAYER_A = 0;
Tennis.prototype.PLAYER_B = 1;
Tennis.prototype.getScore = function() {
	if(
		this.player_values[this.PLAYER_A] == this.player_values[this.PLAYER_B] &&
		this.player_values[this.PLAYER_B] == 45
	)
	{
		return "Deuce";
	}
	return "Player A " +  this.player_values[this.PLAYER_A] + " - Player B "+ this.player_values[this.PLAYER_B];
};
Tennis.prototype.score = function(player) {
	this.player_values[player] += 15;
};
