import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppNavbar from "./components/navbar";
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"
import "bootstrap/dist/css/bootstrap.min.css";


import Footer from "./components/Footer";

const App = () => (
    <Router>
    <>
      <AppNavbar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
        <Route render={About} />
      </Switch>
      <Footer />
    </>
  </Router>
);

export default App;
