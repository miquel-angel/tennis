<?php
class Tennis
{
	private $points_to_real_score = array(
		0,
		15,
		30,
		40
	);
	
	public function getScore( array $scores )
	{
		if ( $this->isDeuce( $scores[0], $scores[1] ) )
		{
			return 'Deuce';
		}
		if ( $player_with_adventage = $this->isAdvantge( $scores[0], $scores[1] ) )
		{
			return 'Advantage ' . $player_with_adventage;
		}
		if ( $player_wins = $this->isWins( $scores[0], $scores[1] ) )
		{
			return 'Wins ' . $player_wins;
		}

		return 'Player A ' . $this->getPoints( $scores[0] ) . '- Player B ' . $this->getPoints( $scores[1] );
	}

	private function getPoints( $points )
	{
		return $this->points_to_real_score[$points];
	}

	private function isDeuce( $score_a, $score_b )
	{
		if ( $score_a == $score_b && $score_a > 2 )
		{
			return true;
		}
	}

	private function isAdvantge( $score_a, $score_b )
	{
		if ( $score_a < 3 || $score_b < 3 )
		{
			return false;
		}

		$diff_points = $score_a - $score_b;
		$player_with_more_points = ( $diff_points > 0 )? 'Player A' : 'Player B';		
		
		return ( abs( $diff_points ) == 1 )? $player_with_more_points : false;
	}

	private function isWins( $score_a, $score_b )
	{
		if ( $score_a < 4 && $score_b < 4 )
		{
			return false;
		}
		
		$diff_points = $score_a - $score_b;
		$player_with_more_points = ( $diff_points > 0 )? 'Player A' : 'Player B';		
		
		return ( abs( $diff_points ) > 1 )? $player_with_more_points : false;
	}
}


?>
