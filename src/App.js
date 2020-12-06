import React from 'react';
import './style.css';
import './App.css';

import 'react-dropdown/style.css';
import Selection from './components/selection';
import AuthButton from './components/authButton';
import { readCodeAndScope} from './strava';
import { getAthlete } from './utils/backend';

function App() {
  var authInfo = readCodeAndScope();
  if(!authInfo.error)
    var stats = getAthlete(authInfo.code);
  // var token = getToken(authInfo.code);
  // if(!token.access_token)
  //   var athlete = getAthleteStats(token.athlete.id, token.access_token);
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
