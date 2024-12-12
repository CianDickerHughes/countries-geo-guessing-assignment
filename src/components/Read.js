import Countrie from "./Countrie";
import { useEffect, useState  } from 'react';
import axios from "axios";

// The Read
const Read = () => {
    // Array of Countries of json
    // Explain: it's a react hook that allows you to add state to a functional component
    const [countries, setCountrie] = useState([]);

    const Reload = () => {
      console.log("Reloading movie data...");
      axios.get('http://localhost:4000/api/countries')
          .then((response) => {
            setCountrie(response.data.countries);
          })
          .catch((error) => {
              console.error("Error reloading data:", error);
          });
    };

    // Get Countries from http
    // Explain: it tells React that your component needs to do something after render
    useEffect(() => {
      Reload()
    }, []);
    
    // Return read component
    return (
        <div>
            <h3>Hello from read component!</h3>
            <Countrie myCountrie={countries} ReloadData={Reload} /*PASS data to Countries.js*//>
        </div>
    );
  }
  
  export default Read;