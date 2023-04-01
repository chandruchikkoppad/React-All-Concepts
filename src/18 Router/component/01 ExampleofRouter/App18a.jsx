import React from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Register from './Register';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from "./Navbar";

const App18a = () => {
  return (
    <div>
          <BrowserRouter>
              <Navbar/>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/login" component={Home} exact></Route>
          <Route path="/register" component={Register} exact></Route>
          <Route path="/about" component={About} exact></Route>
          <Route path="/contact" component={Contact} exact></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App18a;
