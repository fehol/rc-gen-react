import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import InputColor from 'react-input-color';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import ReactDom from 'react-dom';

function App() {
  const [hex, setHex] = useState('#ffffff');
  const randomHex = () => {
    const Random = '#' + Math.floor(Math.random() * 16777215).toString(16);

    setHex(Random);
  };

  return (
    <div>
      <div
        className="RandomColor"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: `${hex}`,
          minHeight: '33.34vh',
          overflow: 'hidden',
          zoom: 3,
        }}
      >
        <h3>Random Color Generator</h3>
        <h4>{hex}</h4>
        <button class="glow-on-hover" type="button" onClick={randomHex}>
          Randomize
        </button>
      </div>
      <div>
        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">
            Coconut
          </option>
          <option value="mango">Mango</option>
        </select>
      </div>
    </div>
  );
}

export default App;

//https://reactjs.org/docs/forms.html
//https://www.youtube.com/watch?time_continue=1&v=AcOjmZrcxfM&feature=emb_logo&ab_channel=HongLy
