import React from 'react';
import logo from './logo.svg';
import './style.css';
import './App.css';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Selection from './selection'

 
const options = [
  'one', 'two', 'three'
];


const defaultOption = options[0];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Selection/>
      </header>
    </div>
  );
}

export default App;
