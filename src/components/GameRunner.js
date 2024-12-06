import { useEffect, useState  } from 'react';
import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';

const GameRunner = () => {

    const [countries, setCountrie] = useState([]);
    const answerCountries = [];
    const [data, setData] = useState(true);
    const getCountries = () => {
        //console.log("Reloading movie data...");
        axios.get('http://localhost:4000/api/countries')
            .then((response) => {
            setCountrie(response.data.countries);
            setData(false)
            console.log(response.data.countries);

            })
            .catch((error) => {
                console.error("Error reloading data:", error);
            });
    };

    // get Countries from http
    // explain: it tells React that your component needs to do something after render
    useEffect(() => {
        getCountries()
        //answersCountries();
    }, []);

    const answersCountries = () => {
        
        answerCountries = countries;
    };
    
    return (
        <div>
            <h3>My GameItem in another component</h3>
            { (data) ? (null) : (countries[0].name)}
        </div>
    )
  };
  
  export default GameRunner;