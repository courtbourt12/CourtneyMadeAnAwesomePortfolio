import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Splash from "./pages/Splash"
import About from "./pages/About"
import Work from "./pages/Work"
import Contact from "./pages/Contact"
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
    <Router>
    <>
      <Switch>
        <Route exact path="/splash" component={Splash} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
        <Route render={Splash} />
      </Switch>
    </>
  </Router>
);

export default App;
