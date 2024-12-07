import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';

const GameQuestion = (props) => {

    var i = 0;
    useEffect(() => { 
        i++;
        console.log(i+"Countrie Item:", props.answerCountries);
      }, [props.answerCountries]); // Only run this effect when the mymovie prop changes
    

    return (
        <div>
            <p>{props.answerCountries.name}</p>
        </div>
    );
  };
  
  export default GameQuestion;