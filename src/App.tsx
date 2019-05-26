import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Requirements from "./Requirements";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h2>Welcome to React Router Tutorial</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/requirements"} className="nav-link">
                Requirements
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/requirements" component={Requirements} />
      </div>
    </Router>
  );
};

export default App;
