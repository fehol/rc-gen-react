import React, { useState } from 'react';
import './Styles/App.css';
import './Styles/select.css';
import './Styles/button.css';
import randomColor from 'randomcolor';

const App = () => {
  const initialColor = randomColor();
  const [color, setColor] = useState(initialColor);
  const [colorHue, setColorHue] = useState('');
  const [colorLightness, setColorLuminosity] = useState('');
  const hue = ['color', 'red', 'blue', 'green', 'orange', 'violet', 'yellow'];
  const luminosity = ['luminosity', 'light', 'dark', 'bright'];

  function onHueChange(e) {
    setColorHue(e.target.value);
    setNewColor(e.target.value, colorLightness);
  }

  function onLuminosityChange(e) {
    setColorLuminosity(e.target.value);
    setNewColor(colorHue, e.target.value);
  }

  function setNewColor(hue, luminosity) {
    setColor(
      randomColor({
        luminosity: luminosity,
        hue: hue,
      }),
    );
  }

  return (
    <div
      className="App"
      style={{
        backgroundColor: `${color}`,
        minHeight: '33.34vh',
        overflow: 'hidden',
        zoom: '3',
      }}
    >
      <h1>Random Color Generator</h1>
      <h2>{color}</h2>
      <select name="Color" onChange={onHueChange}>
        {hue.map((value, index) => {
          return <option id={value}>{value}</option>;
        })}
      </select>
      <select name="Luminosity" onChange={onLuminosityChange}>
        {luminosity.map((value, index) => {
          return <option id={value}>{value}</option>;
        })}
      </select>
      <button
        class="glow-on-hover"
        type="button"
        onClick={() => setColor(randomColor())}
      >
        Random Color
      </button>
    </div>
  );
};

export default App;
