import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section id='Register-Block'>
      <article>
        <h1>Register Here</h1>
        <form action="">
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' placeholder='Enter Your Name'  />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' placeholder='Enter Your Email' />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="phone" placeholder='Enter Your Number'/>
          </div>
          <div><label htmlFor="Gender">Gender:</label>
            <input type="radio" name="Gender" id="Gender" />Male
          <input type="radio" name='Gender' id='Gender'/>Female</div>
          <div>
            <label htmlFor="address">Address</label>
            <textarea name="" id="address" cols="30" rows="10"></textarea>
          </div>
          <div><button Link to="/Login">Register</button></div>
        </form>
      </article>
    </section>
  )
}

export default Register
