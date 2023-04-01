import React from "react";
import Nav from "./../header/Nav";

const Home = () => {
  return (
    <div
      id="main-page"
      style={{
        width: "100%",
        height: "70vh",
        color: "Navy",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "larger",
      }}
    >
      <h1 style={{ color: "goldenrod", fontFamily: "sans-serif" }}>
        Welcome Home
      </h1>
    </div>
  );
};

export default Home;
