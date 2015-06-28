<?php
include 'tennis.php';

class tennisTest extends PHPUnit_Framework_TestCase
{
	private $obj;

	public function setUp()
	{
		$this->obj = new Tennis();
	}

	public function testDrawWith0Points()
	{
		$this->assertEquals( 'Player A 0- Player B 0', $this->obj->getScore( array( 0, 0 ) ) ); 
	}

	public function testPlayerA15PointsPlayerB0()
	{
		$this->assertEquals( 'Player A 15- Player B 0', $this->obj->getScore( array( 1, 0 ) ) ); 
	}

	public function testPlayerA30PointsPlayerB15()
	{
		$this->assertEquals( 'Player A 30- Player B 15', $this->obj->getScore( array( 2, 1 ) ) ); 
	}

	public function testPlayerA40PointsPlayerB0()
	{
		$this->assertEquals( 'Player A 40- Player B 0', $this->obj->getScore( array( 3, 0 ) ) ); 
	}

	public function testPlayerA40PointsPlayerB30()
	{
		$this->assertEquals( 'Player A 40- Player B 30', $this->obj->getScore( array( 3, 2 ) ) ); 
	}

	public function testDeuce()
	{
		$this->assertEquals( 'Deuce', $this->obj->getScore( array( 3, 3 ) ) ); 
	}

	public function testDeuceWithManyResults()
	{
		$this->assertEquals( 'Deuce', $this->obj->getScore( array( 5, 5 ) ) ); 
	}

	public function testAdvantagePlayerA()
	{
		$this->assertEquals( 'Advantage Player A', $this->obj->getScore( array( 5, 4 ) ) ); 
	}

	public function testAdvantagePlayerB()
	{
		$this->assertEquals( 'Advantage Player B', $this->obj->getScore( array( 5, 6 ) ) ); 
	}

	public function testWinsPlayerA()
	{
		$this->assertEquals( 'Wins Player A', $this->obj->getScore( array( 7, 5 ) ) ); 
	}

	public function testWinsPlayerB()
	{
		$this->assertEquals( 'Wins Player B', $this->obj->getScore( array( 7, 9 ) ) ); 
	}

	public function testWinsPlayerAWithMoe2Points()
	{
		$this->assertEquals( 'Wins Player A', $this->obj->getScore( array( 4, 0 ) ) ); 
	}
}

?>
