import React from "react";
import { useState } from "react";
import MyModal from "./ShowModals"


const Modals = () => {
  let [showmodal,setShowModal]=useState(false)

let closeModal=()=>{setShowModal(false)}

  return (
    <>
      <button onClick={()=>setShowModal(true)}>Open Modal</button>
      {showmodal && <MyModal closeModal={closeModal}/>}
    </>
  );
};

export default Modals;
