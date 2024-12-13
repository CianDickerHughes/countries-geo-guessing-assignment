import { useEffect, useState  } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'; 
import GameQuestion from './GameQuestion';

const GameRunner = () => {
    const [countries, setCountries] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const getCountries = () => {
        // Fetching and updating data from server.js
        // Shuffle Countries
        axios.get('http://localhost:4000/api/countries')
            .then((response) => {
                const shuffledCountries = [...response.data.countries].sort(() => 0.5 - Math.random());
                setCountries(shuffledCountries);
                setDataLoaded(true); 
            })
            .catch((error) => {
                console.error("Error reloading data:", error);
            });
    };

    // Get Countries from http
    // Explain: it tells React that your component needs to do something after render
    useEffect(() => {
        getCountries()
    }, []);

    // Restart Game when when Player Clicks on Restart
    const restartGame = () => {
        setScore(0);
        setWrongAnswers(0);
        setCurrentQuestionIndex(0);
        setGameOver(false);
        getCountries();
    };

    // Increment the score
    const handleCorrectAnswer = () => {
        setScore((prevScore) => prevScore + 1);
    };

    // Increment the wrong answer count
    const handleWrongAnswer = () => {
        setWrongAnswers((prevWrongAnswers) => prevWrongAnswers + 1);
        if (wrongAnswers + 1 >= 3) {
            setGameOver(true);
        }
    };

    // Move to the next question or show the results if 3 wrong questions
    const handleNextQuestion = () => {
        if (currentQuestionIndex < countries.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            setGameOver(true);
        }
    };
    
    return (
        <div style ={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h3>Playing Game</h3>

            {dataLoaded && countries.length > 0 ? (
                <div>
                    {!gameOver ? (
                        <>  {/* Game Playing, show Flag and 4 Countrie options */}
                            <label>Question {currentQuestionIndex + 1} of {countries.length} : </label>
                            <label>Score: {score} : </label>
                            <label>Wrong Answers: {wrongAnswers}/3</label>
                            <GameQuestion
                                currentCountry={countries[currentQuestionIndex]}
                                allCountries={countries}
                                onCorrectAnswer={handleCorrectAnswer}
                                onWrongAnswer={handleWrongAnswer}
                                onNextQuestion={handleNextQuestion}
                            />
                        </>
                    ) : ( 
                        <div> {/* Game Over, get score and player can restart game or go home page */}  
                            <h4>Game Over!</h4>
                            <p>Your final score: {score}</p>
                            <p>Number of wrong answers: {wrongAnswers}</p>
                            <div>
                                <button
                                    className="btn btn-primary"
                                    onClick={restartGame}
                                >
                                    Restart Game
                                </button>
                                <Link to="/" className="btn btn-secondary" style={{ marginLeft: '10px' }}>
                                    Go to Home
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <p>Loading countries...</p>
            )}
        </div>
    )
  };
  
  export default GameRunner;