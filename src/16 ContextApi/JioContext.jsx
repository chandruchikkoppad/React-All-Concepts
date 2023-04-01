// ! Create context
// ! Provider & consumer

import React, { createContext, useState } from "react";
// initialization of context Api
export let MyJioContextApi = createContext();

// set jio provider
// ! Jio Provider is a function
let JioProvider = ({ children }) => {
  let [network, setNetwork] = useState({
    networkName: "jio",
    price: [199, 200, 299, 300, 500, 600],
    type: ["fibernet", "mobile network"]
  });
  return (
    <MyJioContextApi.Provider value={network}>
      {children}
    </MyJioContextApi.Provider>
  );
};
export default JioProvider;
MyJioContextApi.displayName = "JIO NETWORK"; //for debugging purpose