import React from "react";
import "./Styles/App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/about"
import Sector from "./Components/sector"
import contact from "./Components/contact"
import Project from "./Components/project"

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Navbar /> */}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/sectors" exact>
          <Home />
        </Route>
        <Route path="/contact" exact>
          <Home />
        </Route>
        <Route path="/project" exact>
          <Project />
        </Route>
        <Redirect to="/" />
      </Switch>
      

      <Footer />
    </Router>
  );
}

export default App;
