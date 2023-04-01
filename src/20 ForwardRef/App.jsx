// import React,{useRef,useEffect} from 'react'
// import Input from './Input';

// const App = () => {
//     let inputRef = useRef()
//     let type = "text"
//     let placeholder = "Enter any text";
//     let name = "username";
//     let id = "username";
//     useEffect(() => {
//         inputRef.current.style.background = "#efefef"
//         inputRef.current.value="Hello"
// })
   
//   return (
//     <div>
//           <Input attr={{ id, placeholder, name, type }} ref={inputRef} />
//     </div>
//   )
// }

// export default App


// ! playing audio using forward ref

import React from 'react'
import AudioComp from './AudioComp';
import AUDIO from './audio.mp3'//! add file
import { useState } from 'react';
import { useRef } from 'react';

const App = () => {
    let [play, setPlay] = useState(true)
    let audioRef = useRef();

    let PlayorPause = () => {
        setPlay(!play);
        if (play === true) {
            audioRef.current.play();
            audioRef.current.style.width="400px"
        }
        else {
            audioRef.current.pause();
            audioRef.current.style.width="400px"
        }
    }
  return (
      <div><AudioComp audioData={{ AUDIO, PlayorPause,play }} ref={audioRef} /></div>
  )
}

export default App
