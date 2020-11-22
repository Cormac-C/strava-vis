import React from 'react';
import './style.css';
import './App.css';

import 'react-dropdown/style.css';
import Selection from './selection';
import AuthButton from './authButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthButton/>
        <Selection/>
      </header>
    </div>
  );
}

export default App;
