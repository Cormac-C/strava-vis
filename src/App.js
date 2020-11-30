import React from 'react';
import './style.css';
import './App.css';

import 'react-dropdown/style.css';
import Selection from './selection';
import AuthButton from './authButton';
import { readCodeAndScope} from './strava';
import { getToken } from './backend';

function App() {
  var authInfo = readCodeAndScope();
  if(!authInfo.error)
  getToken(authInfo.code);
  return (
    <div className="App">
      <h>
        URL code: {authInfo.code} and scope: {authInfo.scope} 
      </h>
      <header className="App-header">
        <AuthButton/>
        <Selection/>
      </header>
    </div>
  );
}

export default App;
