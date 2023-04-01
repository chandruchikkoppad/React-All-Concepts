import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import PageNotFound from './Pagenotfound';

const App18B = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
                  <Route path="/register" element={<Register />}></Route>
                  <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App18B;
