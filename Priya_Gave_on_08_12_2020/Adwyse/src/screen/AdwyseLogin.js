import React, { Component } from 'react'
import AdwyseHeading from '../components/AdwyseHeading';
import SVGImages from '../components/icons'

export default class AdwyseLogin extends Component {
    render() {
        return (
      <div className="main">
      <form className="form">
        <div>
        <AdwyseHeading/>
        </div>
        <div style={{marginTop:"12px"}}>
        <h3>Let's get started!</h3>
       </div>
       <div style={{marginLeft:"-315px",marginTop:"14px"}}>
       <img  src={SVGImages.AccountIcon} alt="" />
       </div>
        <div>
          <label style={{marginLeft:"15px",marginTop:"-5px"}}  htmlFor="Email">Email/Phone Number</label>
          <input style={inputbox}
            type="text"
            id="username"
            placeholder="Enter Email/Phone Number"
            required>
            </input>
        </div>
        <div>
        <label />
        <button style={sucessbtn} type="submit">
        <span style={logintext}>Login with OTP</span>
        <div className="rightArrowIcon"></div>
        </button>
      </div> 
        <div>
        <label />
        <button className="primary" style={prmarybtn} type="submit">
        <span style={logintext}>Login with Password</span>
        <div className="rightArrowIcon"></div>
        </button>
        </div>
        <div>
          <label />
        </div>
      <div>
      <p style={dontHaveAnAccount}>Don't have account first?</p>
      </div>  
      <div>
      <h4 style={{marginTop:"-14px"}}>Register Now</h4>
      </div> 
       <div className="backgroungimg">
       </div>
      </form>
    </div>
        )
    }
}

const inputbox={
  width: "340px",
    height: "50px",
    marginLeft: "-10px",
    fontSize:"15px",
    color: "#4A5058",
background: "#F2F2F2 0% 0% no-repeat padding-box",
borderRadius: "6px",
opacity: "1"
}

const sucessbtn={
  marginTop: "7px",
  marginBottom:"7px",
  marginLeft: "-10px",
width: "340px",
height: "50px",
background: "#2EB9AE 0% 0% no-repeat padding-box",
borderRadius: "6px",
opacity: "1"
}

const logintext={
  top: "381px",
  float: "left",
marginTop: "-3px",
marginLeft: "-33px",
width: "231px",
height: "22px",
/* text-align: left; */
font: "normal normal bold 18px/22px Lato",
letterSpacing: "0px",
color: "#FFFFFF",
opacity: "1"
}

const prmarybtn={
    marginBottom: "7px",
    marginLeft: "-10px",
    width: "340px",
    height: "50px"
}

const dontHaveAnAccount={
  top: "534px",
  marginLeft:"-10px",
left: "91px",
width: "232px",
height: "17px",
textAlign: "center",
letterSpacing: "0px",
opacity: "1"
}