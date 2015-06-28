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
			expect_message = "Player A 15 - Player B 15";
			// Refactor test because we see that we did many times that call, and also now the code is more easy to follow.
			// tennis.score(tennis.PLAYER_A);
			// tennis.score(tennis.PLAYER_B);
			whenPlayerScore(1,tennis.PLAYER_A,tennis);
			whenPlayerScore(1,tennis.PLAYER_B,tennis);				
			// act
			response = tennis.getScore() ;
			// assert
			expect(response).toEqual(expect_message);
		});
		it( "should return draw when both make 2 point", function() {
			// Arrange
			expect_message = "Player A 30 - Player B 30";
			// Refactor test because we see that we did many times that call, and also now the code is more easy to follow.
			//tennis.score(tennis.PLAYER_A);
			//tennis.score(tennis.PLAYER_A);
			//tennis.score(tennis.PLAYER_B);
			//tennis.score(tennis.PLAYER_B);
			whenPlayerScore(2,tennis.PLAYER_A,tennis);
			whenPlayerScore(2,tennis.PLAYER_B,tennis);
			// act
			response = tennis.getScore() ;
			// assert
			expect(response).toEqual(expect_message);
		});
		it( "should return deuce when both make 3 point", function() {
			// Arrange
			expect_message = "Deuce";
			whenPlayerScore(3,tennis.PLAYER_A,tennis);
			whenPlayerScore(3,tennis.PLAYER_B,tennis);
			// act
			response = tennis.getScore() ;
			// assert
			expect(response).toEqual(expect_message);
		});
		it( "should return deuce when both make 4 point", function() {
			// Arrange
			expect_message = "Deuce";
			whenPlayerScore(2,tennis.PLAYER_A,tennis);
			whenPlayerScore(2,tennis.PLAYER_B,tennis);
			whenPlayerScore(1,tennis.PLAYER_A,tennis);
			whenPlayerScore(1,tennis.PLAYER_B,tennis);
			whenPlayerScore(1,tennis.PLAYER_A,tennis);
			whenPlayerScore(1,tennis.PLAYER_B,tennis);
			// act
			response = tennis.getScore() ;
			// assert
			expect(response).toEqual(expect_message);
		});
	});
});

function whenPlayerScore(points, player, tennis) {
	for (var i = 0; i < points; ++i) {
		tennis.score(player);
	} 
}
