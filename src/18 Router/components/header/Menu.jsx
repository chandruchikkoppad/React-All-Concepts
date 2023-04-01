import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="menu">
      <ul
        style={{
          display: "flex",
          width: "100%",
          height: "inherit",
          justifyContent: "space-around",
          listStyle: "none",
          textDecoration: "none",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="log">
          <Link to="/login">Login</Link>
        </li>
        <li className="reg">
          <Link to="/dashboard">My Account</Link>
        </li>
        <li className="reg">
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu
