import React from 'react';
import { Link } from 'react-router-dom';



// Return the content of the home screen
const Content = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Wellcome to Countres-Geo-Guessing</h1>
      <h2>It is {new Date().toLocaleTimeString() /* Local Time */}.</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/archive/6/6d/20171229211557%21Earth_-_The_Noun_Project.svg" style={{ width: '250px', height: 'auto', backgroundColor: '#0D98BA', borderRadius: '180px', }} alt="Earth Icon"/>
      <div style={{ marginTop: '20px' }}>
        {/* Navigation Buttons */}
        <Link to="/create">
          <button style={buttonStyle /* Go to Create.js */}>Add New Countrie</button>
        </Link>
        <Link to="/read">
          <button style={buttonStyle} /* Go to Read.js */>Read Countrie</button>
        </Link>
        <Link to="/Game">
          <button style={buttonStyle} /* Go to Game.js */>Play Geo-Guesser</button>
        </Link>
      </div>
    </div>
  );
}

// Style for Buttons
const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '5px',
  backgroundColor: '#00C000',
  color: '#fff',
  border: 'none'
};

export default Content;