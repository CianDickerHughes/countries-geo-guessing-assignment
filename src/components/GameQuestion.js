import { useState  } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const GameQuestion = ({ currentCountry, allCountries, onCorrectAnswer, onWrongAnswer, onNextQuestion }) => {
    const [feedback, setFeedback] = useState(null); 

    // Function to generate 4 MCQ Question
    const generateOptions = () => {
        const incorrectOptions = allCountries
            .filter(country => country.name !== currentCountry.name) 
            .sort(() => 0.5 - Math.random())
            .slice(0, 3); 

        const allOptions = [...incorrectOptions, currentCountry]; // Add correct answer
        return allOptions.sort(() => 0.5 - Math.random()); // Shuffle options
    };

    const options = generateOptions();

    // Give feedback to the user if Question is Correct or Wrong
    const handleAnswer = (selectedOption) => {
        if (selectedOption.name === currentCountry.name) {
            setFeedback('Correct!');
            onCorrectAnswer();
        } else {
            setFeedback('Wrong!'); 
            onWrongAnswer();
        }
        
        // Delay moving to the next question to let the user see the feedback
        setTimeout(() => {
            setFeedback(null); 
            onNextQuestion();
        }, 1000); 
    };

    return (
        <Card style={{ marginBottom: '20px' }}>
            <Card.Header>What is the name of this country?</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <img
                        src={currentCountry.flag}
                        alt={currentCountry.name}
                        style={{ width: 'auto', height: '250px', border: '3px solid #000', borderRadius: '5px' }}
                    />
                </blockquote>
                <div>
                    <h5>Choose the correct answer:</h5>
                    {options.map((option, index) => ( // 4 Countrie Answers
                        <Button
                            key={index}
                            variant="outline-primary"
                            style={{ margin: '5px' }}
                            onClick={() => handleAnswer(option)}
                        >
                            {option.name}
                        </Button>
                    ))}
                </div>
                {feedback && ( // is Answer Correct or Wrong 
                    <div style={{ marginTop: '10px', fontSize: '18px', color: feedback === 'Correct!' ? 'green' : 'red' }}>
                        {feedback}
                    </div>
                )}
            </Card.Body>
        </Card>
    );
  };
  
  export default GameQuestion;