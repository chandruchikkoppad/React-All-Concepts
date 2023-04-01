import React from 'react'

const App11 = () => {
    let handleSubmit = e => {
        e.preventDefault()
        console.log(e)
    }
  return (
      <div>
           <form onSubmit={handleSubmit}>
              <input type="text" placeholder='Enter the text' />
              <button>Submit</button>
          </form>
    </div>
  )
}

export default App11