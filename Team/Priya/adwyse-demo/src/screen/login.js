import React, { Component } from 'react'
import '../login.css';
export default class Connected extends Component {
    render() {
        return (
            <div>
      <form className="card00">
      <label  htmlFor="confirmPassword">
      <svg xmlns="http://www.w3.org/2000/svg" width="16.225" height="24.95" viewBox="0 0 16.225 24.95">
        <react class="a1" width="3px" height="24"  transform="translate(-33.565 -56.887)"/>
        <g transform="translate(0 0.351)">
          <line class="a" x1="12" y2="10" transform="translate(35.678 58.649)"/>
        <line class="a" x1="12" y1="10" transform="translate(35.678 69.375)"/></g></svg>

        </label>

        {/* arrow */}
<div className="header00"></div> 

     {/* logo */}
<div className="header100"></div> 

{/* small title */}
<div className="subtitle00">Lets get started!</div>

{/* label */}
<div className="textuser00">
          <div className="images00">
            <div className="text00"> Email/Phone Number</div></div>
           </div> 
           
{/* input filled */}
           <div className="formfield00">
           <br></br>
           <span className="insidetext00">Please enter your email or phone number </span>
           </div>

{/* successbtn */}
        <div>
          <label />
          <button className="sucessbtn00" type="submit">
          <span className="logintext00">Login with OTP</span>
          <div className="rightarrow00"></div>
          </button>
        </div>

{/* primary btn */}
        <div>
          <label />
          <button className="primarybtn00" type="submit">
          <span className="logintext100">Login with Password</span>
          <div className="rightarrow00"></div>
          </button>
        </div>

{/* text with anchortag */}
<div className="regtext00">
Don’t have an account? <a className="anch00">Register Now</a>
</div>

{/* image */}
        <div>
          <label />
          <div 
      
      className="backgroungimg00" >
       </div>
        </div>
      
       
      </form>
    </div>
        )
    }
}
