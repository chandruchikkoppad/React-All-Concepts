import React from "react";
import Register from './Register';
import Login from './Login';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return <section id="headerBlock">
        <article>
            <h1></h1>
            <div>
                <a href="#" >Tyss</a>
            </div>
            <div className="menuBlock">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/Register">Register</Link></li>
                </ul>
            </div>
      </article>
  </section>;
};

export default Navbar;
