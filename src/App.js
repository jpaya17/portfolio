import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills"

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/myportfolio">
            <Portfolio />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>    
  );
}

export default App;
