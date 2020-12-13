
import React, { Component } from 'react'
import '../App.css';
export default class AdwyseLogin extends Component {
    render() {
        return (
            <div>
      <form className="form">
        <div>
          <h1><b>Adwyse</b></h1>
        </div>
        <div>
        <h3>Let's get started!</h3>
       </div>

 <div>
      <label  htmlFor="confirmPassword">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
   <g transform="translate(-34 -261)">
      <rect class="a" width="24" height="24" transform="translate(34 261)"/>
      <g transform="translate(0 -68)">
         <path class="b" d="M276.264,155.645a8.131,8.131,0,1,1,16.263,0" transform="translate(-238.764 194.868)"/>
         <circle class="b" cx="4" cy="4" r="4" transform="translate(41.5 332)"/>
      </g>
   </g>
</svg>
            
            <b>Email/Phone Number</b></label>
          <input style={{fontSize:"18px"}}
            type="text"
            id="username"
            placeholder="Pleae Enter your mail Or Phone No."
            required
           
          ></input>
        </div>
        <div>
          <label />
          <button className="secondary" type="submit">
            Login With Otp
          </button>
        </div>
        <div>
        <label />
        <button className="primary" type="submit">
          Login With Facebook
        </button>
      </div>
        <div>
          <label />
          <div>
          </div>
        </div>
      <div>
      <p>Don't have account first?<a href="#"> <b>Register Now</b></a></p>
      </div>  
       <div className="backgroungimg">
       </div>
      </form>
    </div>
        )
    }
}
