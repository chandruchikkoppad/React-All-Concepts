import React from "react";

const User = (props) => {
    if (props.username === "sanjay") {
        throw new Error("sanjay is not our team")
    }
    return <div>
        <h1>{ props.username}</h1>
  </div>;
};

export default User;
