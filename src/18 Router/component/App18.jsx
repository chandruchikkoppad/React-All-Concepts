import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './other/Home'
import Login from './auth/Login'
import Register from './auth/Register'
const App18 = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/login" component={Login} exact></Route>
          <Route path="/register" component={Register}exact></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App18;
