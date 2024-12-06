import { Link } from 'react-router-dom';

// Return the Header
const Game = () => {
    return (
      <dir>
        <h1>My Game Countries GEO Guessing</h1>
        <h2>Guess 10 countries and get the highest score</h2>
        <Link to={"/GameRunner/" /* link to GameItem*/} className="btn btn-primary">Start Game</Link>
        <br></br>
        <br></br>
        <h2>Socre</h2>
      </dir>
    );
  }
  
  export default Game;