import { Link } from 'react-router-dom';

// Return the Game
const Game = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>My Game Countries Geo Guessing</h1>
        <h2>Guess the countries and get the highest score</h2>
        <h2>Get 3 Question Wrong Game Over</h2>
        <br></br>
        <Link to={"/GameRunner/" /* Link to GameItem*/} className="btn btn-primary" style={{ width: '160px', height: '60px', fontSize: '25px' }}>Start Game</Link>
      </div>
    );
  }
  
  export default Game;