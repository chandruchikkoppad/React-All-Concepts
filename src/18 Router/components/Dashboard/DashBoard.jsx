import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="dashBoard">
      <article>
        <h1>Dashboard</h1>
        <nav className="nested-menu">
          <ul className="dash-menu">
            <li>
              <Link to="/dashboard/myaccount">My Account</Link>
            </li>
            <li>
              <Link to="/dashboard/userprofile">My Profile</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Outlet />
        </main>
      </article>
    </div>
  );
};

export default DashBoard;
