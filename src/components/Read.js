import Counters from "./Counter";
import { useEffect, useState  } from 'react';
import axios from "axios";

// The Read
const Read = () => {
    // array of movies of json
    // explain: it's a react hook that allows you to add state to a functional component
    const [counters, setCounters] = useState([]);

    const Reload = () => {
      console.log("Reloading movie data...");
      axios.get('http://localhost:4000/api/counters')
          .then((response) => {
            setCounters(response.data.counters);
          })
          .catch((error) => {
              console.error("Error reloading data:", error);
          });
    };

    // get movies from http
    // explain: it tells React that your component needs to do something after render
    useEffect(() => {
      Reload()
    }, []);
    
    // return read component
    return (
        <div>
            <h3>Hello from read component!</h3>
            <Counters myCounters={counters} ReloadData={Reload} /*PASS data to Movies.js*//>
        </div>
    );
  }
  
  export default Read;