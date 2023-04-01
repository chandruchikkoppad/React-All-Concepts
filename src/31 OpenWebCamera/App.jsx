// ! Goto Uncontrolled component for more info

// import React, { Component } from 'react';
// export default class Forms extends Component {
//     constructor() {
//         super();
//         this.state = {
//             play: false,
//         };
//         this.videoRef = React.createRef();
//     }
//     Opencamera = () => {
//         window.navigator.mediaDevices.getUserMedia({
//             audio: true,
//             video: {
//                 height: "50vh",
//                 width: "100%",
//             },
//         })
//             .then(streamData => {
//                 this.videoRef.current.srcObject = streamData;
//                 this.videoRef.current.onloadedmetadata = () => {
//                     this.videoRef.current.play();
//                 };
//             })
//             .catch(err => console.log(err));
//     };
//   render() {
//     return (
//       <div>
//             <video ref={this.videoRef}></video>
//             <button onClick={this.Opencamera}>Opencamera</button>
//       </div>
//     )
//     };
// };

// !=============

// ? using class based component



import React, { Component } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
Component=() =>{
   let[state,setState]=useState({
    play:false
   })
  let videoRef = useRef();
  let  Opencamera = () => {
        window.navigator.mediaDevices.getUserMedia({
            audio: true,
            video: {
                height: "50vh",
                width: "100%",
            },
        })
            .then(streamData => {
                videoRef.current.srcObject = streamData;
                videoRef.current.onloadedmetadata = () => {
                videoRef.current.play();
                };
            })
            .catch(err => console.log(err));
    };
    return (
      <div>
            <video ref={videoRef}></video>
            <button onClick={Opencamera}>Opencamera</button>
      </div>
    )
    };
export default Component