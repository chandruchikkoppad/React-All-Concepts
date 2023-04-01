import { useState, useEffect } from "react";

const useFetch = (url) => {
  let [state, setState] = useState("");

  useEffect(() => {
    let fetchData = async () => {
      let data = await window.fetch(url);
      let finalData = await data.json();
      setState(finalData);
    };
    fetchData();
  }, []);
  return state;
};

export default useFetch;


