import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./../other/Home";
import Login from "./../auth/Login";
import Register from "./../auth/Register";
import Dashboard from "./../Dashboard/DashBoard";

import MyAccount from "./../Dashboard/MyAccount";
import UserProfile from "./../Dashboard/UserProfile";
import Pagenotfound from "./../other/PageNotFound";

const BaseRoutes = () => {
  let RouteConfig = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/Login", element: <Login /> },
    { path: "./register", element: <Register /> },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        { path: "my account", element: <MyAccount /> },
        { path: "Profile", element: <UserProfile /> },
      ],
    },
    { path: "*", element: <Pagenotfound /> },
  ]);
  return RouteConfig;
};

export default BaseRoutes;
