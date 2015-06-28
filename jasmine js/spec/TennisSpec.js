describe("Tennis", function() {
	var tennis;

	beforeEach(function() {
		tennis = new Tennis();
	});
	
	describe( "When both users do the same number of points (always less than 2 points difference)", function() {
		it( "should return draw when both don't make any point", function() {
			// Arrange
			expect_message = "Player A 0 - Player B 0";
			// act
			response = tennis.getScore() ;
			// assert
			expect(response).toEqual(expect_message);
		});
		it( "should return draw when both make one point", function() {
			// Arrange
			expect_message = "Player A 0 - Player B 0";
			tennis.score(tennis.PLAYER_A);
			tennis.score(tennis.PLAYER_B);
			// act
			response = tennis.getScore() ;
			// assert
			expect(response).toEqual(expect_message);
		});
	});
});
