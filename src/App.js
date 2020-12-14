import React from "react";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "react-dropdown/style.css";
// import Selection from './components/selection';
// import AuthButton from './components/authButton';
// import { readCodeAndScope} from './strava';
// import { getAthlete } from './utils/backend';

import Charts from "./pages/charts";
import Main from "./pages/main";
import Select from "./pages/select";

function App() {
  // var authInfo = readCodeAndScope();
  // if(!authInfo.error)
  //   var stats = getAthlete(authInfo.code);
  // var token = getToken(authInfo.code);
  // if(!token.access_token)
  //   var athlete = getAthleteStats(token.athlete.id, token.access_token);
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/select">
              <Select />
            </Route>
            <Route path="/charts">
              <h>Charts</h>
              <Charts />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>

    // <div className="App">
    //   <h>
    //     URL code: {authInfo.code} and scope: {authInfo.scope}
    //   </h>
    //   <header className="App-header">
    //     <AuthButton/>
    //     <Selection/>
    //   </header>
    // </div>
  );
}

export default App;
