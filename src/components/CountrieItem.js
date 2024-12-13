import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';

function CountieItem(props) {
  useEffect(() => { 
    console.log("Countrie Item:", props.mycountrie);
  }, [props.mycountrie]); // Only run this effect when the mycountie prop changes

  // Delete Countrie
  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete('http://localhost:4000/api/countries/' + props.mycountrie._id)
        .then(() => {
            props.Reload(); // Refresh the Countrie list after deletion
        })
        .catch((error) => {
            console.error("Error deleting countie:", error);
        });
  };

  // Return countieItem component and Display JSON counties with cards
  return (
    <div>
      <Card>
        <Card.Header>{props.mycountrie.name}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.mycountrie.flag} alt={props.mycountrie.name}  style={{ width: '250px', height: 'auto', border: '3px solid #000', borderRadius: '5px' }} />
            <footer>Founded: {props.mycountrie.founded}</footer>
          </blockquote>
          <div>
            <h5>Additional Information:</h5>
            <p>Population: {props.mycountrie.population}</p>
            <p>Area: {props.mycountrie.area} km²</p>
            <p>GDP: {props.mycountrie.gdp}</p>
            <h6>Facts:</h6>
            <ul>
                <li>Fact 1: {props.mycountrie.facts.fact1}</li>
                <li>Fact 2: {props.mycountrie.facts.fact2}</li>
                <li>Fact 3: {props.mycountrie.facts.fact3}</li>
                <li>Fact 4: {props.mycountrie.facts.fact4}</li>
                <li>Fact 5: {props.mycountrie.facts.fact5}</li>
            </ul>
          </div>
        </Card.Body>
        <div>
          {/* Edit countie button */}
          <Link to={"/edit/" + props.mycountrie._id /* Link to edit countie by ID*/} className="btn btn-primary">Edit</Link>
          {/* Delete countie Button by Id */}
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </div>
      </Card>
    </div>
  );
}

export default CountieItem;