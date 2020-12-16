import React from "react";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-dropdown/style.css";
import Charts from "./pages/charts";
import Main from "./pages/main";
import Select from "./pages/select";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/select">
              <Select />
            </Route>
            <Route path="/charts">
              <Charts />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
