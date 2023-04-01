// ! creacting the element using refs

// ! recommended for Constructor but it is not manadatory we can create using the property
// ? Using class based component

// import React,{Component,createRef} from 'react'

// export default class App14 extends Component {
//   constructor() {
//     super();
//     this.textRef = createRef();
//     }
//     ChangeColor = () => {
//         this.textRef.current.style.background = "red"
//         this.textRef.current.innerHTML="Hello Madappa"
//     }
//   render() {
//       return <>
//           <h1 ref={this.textRef}>Hello Lorem ipsum dolor sit amet.</h1>
//       <button onClick={this.ChangeColor}>Change the color</button></>;
//   }
// }

// ============================================================
// ! Functiona based component
// ? No need to use the this keyword
// ? Create one custom

// import React from 'react'

// const App14 = () => {
//     let customRef = React.createRef();
//     let ChangeMyName = () => {
//         customRef.current.innerHTML="Hello TYSS"
//     }
//   return (
//       <div>
//           <h1 ref={customRef}>Hello Shashi</h1>
//           <button onClick={ChangeMyName}>Change the text</button>
//     </div>
//   )
// }

// export default App14

// ==============================================
// ! Using the useRef
// import React, {useRef} from "react";

// const App14 = () => {
//   let customRef = useRef();
//   let ChangeMyName = () => {
//     customRef.current.innerHTML = "Hello TYSS";
//   };
//   return (
//     <div>
//       <h1 ref={customRef}>Hello Shashi</h1>
//       <button onClick={ChangeMyName}>Change the text</button>
//     </div>
//   );
// };

// export default App14;

// ===============================================
// ! Video play using useRef using functional based component

// import React from 'react'
// import { useState,useRef } from 'react';
// import VIDEO from './Arabic Kuthu - Video Song - Beast - Thalapathy Vijay - Pooja Hegde - Sun Pictures - Nelson - Anirudh.mp4'

// const App14 = () => {
//     let [videoPlay, setVideoPLay] = useState(false);
//     let [btnText, setBtnText] = useState(false)
//     let videoRef = useRef();

//     let PlayorPause = () => {
//         setVideoPLay(!videoPlay)
//         if (videoPlay===true) {
//             videoRef.current.play()
//             setBtnText(true)
//         }
//         else {
//             videoRef.current.pause();
//             setBtnText(false)
//         }
//     }
//   return (
//     <section>
//       <article>
//         <video ref={videoRef} src={VIDEO}></video>
//               <button onClick={PlayorPause}>{btnText?"pause":"play" }</button>
//       </article>
//     </section>
//   );
// }

// export default App14
// =======================================
// ! Open camera using the useRef

import React, { Component } from "react";

export default class App14 extends Component {
    constructor() {
        super();
    this.state = {
      play: true,
    };
    this.videoRef = React.createRef();
  }
  OpenCamera = () => {
    window.navigator.mediaDevices.getUserMedia({
      audio: "true",
      video: { height: "50vh", width: "100%" },
    }).then(streamData => {
        this.videoRef.current.srcObject = streamData;
        this.videoRef.current.play();
    }).catch(error=>console.log(error))
  };
  render() {
      return <div>
          <video ref={this.videoRef}></video>
          <button onClick={this.OpenCamera}>Open camera</button>
    </div>;
  }
}




