import React, { useEffect } from 'react'

const App17 = () => {
    useEffect(() => {
    // Interact with DOM
        window.document.body.style.background = "red"
        
        // api
        window.fetch("https://api.github.com/users").then(data=>data.JSON().then(val=>console.log(val))).catch(err=>console.log(err))
    })
// AJAX
    let xmlRequest = new XMLHttpRequest();
    xmlRequest.open("GET", "https://api.github.com/users"); 

  return (
    <div>
      
    </div>
  )
}

export default App17
