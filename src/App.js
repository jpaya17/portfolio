import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/portfolio">Hello</Link>
            </li>
            <li>
              <Link to="/portfolio/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/portfolio/skills">Skills</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/portfolio/skills">
            <Skills />
          </Route>
          <Route path="/portfolio/portfolio">
            <Portfolio />
          </Route>
          <Route path="/portfolio/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>    
  );
}

export default App;
