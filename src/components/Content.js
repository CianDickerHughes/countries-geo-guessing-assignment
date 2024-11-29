import React from 'react';

// Return the content of the home screen
const Content = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString() /* local time */}.</h2>
    </div>
  );
}

export default Content;