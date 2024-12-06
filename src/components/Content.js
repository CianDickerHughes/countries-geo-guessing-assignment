import React from 'react';

// Return the content of the home screen
const Content = () => {
  return (
    <div>
      <h1>Wellcome to Countres-Geo-Guessing</h1>
      <h2>It is {new Date().toLocaleTimeString() /* local time */}.</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/archive/6/6d/20171229211557%21Earth_-_The_Noun_Project.svg" style={{ width: '500px', height: 'auto'}}></img>
    </div>
  );
}

export default Content;