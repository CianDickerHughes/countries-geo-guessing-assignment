import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';

function CounterItem(props) {
  useEffect(() => { 
    console.log("Counters Item:", props.mycounter);
  }, [props.myCounters]); // Only run this effect when the mymovie prop changes

  // Delete Movies
  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete('http://localhost:4000/api/counters' + props.mycounter._id)
        .then(() => {
            props.Reload(); // Refresh the movie list after deletion
        })
        .catch((error) => {
            console.error("Error deleting counter:", error);
        });
  };

  // return MovieItem component and Display JSON movies with cards
  return (
    <div>
      <Card>
        <Card.Header>{props.myCounters.name}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.myCounters.flag} alt={props.myCounters.name} style={{ width: '100px', height: 'auto' }} />
            <footer>Founded: {props.myCounters.founded}</footer>
          </blockquote>
          <div>
            <h5>Additional Information:</h5>
            <p>Population: {props.myCounters.population}</p>
            <p>Area: {props.myCounters.area} km²</p>
            <p>GDP: {props.myCounters.gdp}</p>
            <h6>Facts:</h6>
            <ul>
              {props.myCounters.facts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </div>
        </Card.Body>
        <Link to={"/edit/" + props.myCounters._id /* link to edit counter by ID*/} className="btn btn-primary">Edit</Link>
        <div>
            {/* Delete counter button */}
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </div>
      </Card>
    </div>
  );
}

export default CounterItem;