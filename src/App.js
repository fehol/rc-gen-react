import React, { useState } from 'react';
import './App.css';
import styled, { withTheme } from 'styled-components';

const App = () => {
  // Create a Arrow Function and a useState the #ffffff are the Hex Colors.
  const [hex, setHex] = useState('#ffffff');
  const rndHex = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Stole this function from a forum. It opens up all possible index numbers and randomizes the #

    setHex(randomColor); //Start the function
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: `${hex}`,
        minHeight: '33.34vh',
        overflow: 'hidden',
        zoom: 3,
      }}
    >
      <h1>{hex}</h1>
      <h4>Please choose:</h4>
      <button class="glow-on-hover" type="button" onClick={rndHex}>
        Randomize
      </button>
      <button class="glow-on-hover" type="button">
        Luminosity
      </button>
      <button
        class="glow-on-hover"
        type="button"
        onClick={() => navigator.clipboard.writeText(hex)}
      >
        Copy # Color
      </button>
    </div>
  );
};

export default App;
