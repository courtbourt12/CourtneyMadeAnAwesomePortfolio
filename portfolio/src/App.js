import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"


import Footer from "./components/Footer";

const App = () => (
  <div className="App">
    <Router>
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
        <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
      </Switch>
      <Footer />
    </>
  </Router>
  </div>
);

export default App;
