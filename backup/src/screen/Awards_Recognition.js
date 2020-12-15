import React, { Component } from 'react'
import AwardsDetails from '../components/AwardsDetails';
import RecognitionDetails from '../components/RecognitionDetails';
import Carousel from '../components/Carousel';

import AdwyseHeading from '../components/AdwyseHeading';

export default class Awards_Recognition extends Component {
  render() {
    return (
      <div className="main">
      <form  className="form">
      <AdwyseHeading/>
      <div>
      <h3 style={step}>Step 3 • Awards & Recognitions</h3>
      </div>
      <div>
      <p  style={description}>Lorem ipsum dolor sit amet,consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut</p>
      </div>
      <div style={{marginTop:"41px"}}>
      <label  style={label}  htmlFor="confirmPassword">Awards</label>
      <AwardsDetails/>   
      </div>
      <div>
      <h2  style={addmoreawards}>Add More Awards</h2>
      </div>           
      <div style={{marginTop:"-60px"}}>
      <label  style={label1}   htmlFor="confirmPassword">Recognitions</label>
      <RecognitionDetails/>
      </div>
      <div>
      <h2  style={addmorRecog}>Add More Recognitions</h2>
      </div>    
      <div>
      <label />
      <button style={sucessbtn} type="submit">
      <span style={logintext}>Confirm & Continue</span>
      <div className="rightArrowIcon"></div>
      </button>
    </div> 
      <div>
      <p style={{marginLeft:"125px"}} className="doitlater">Do it later</p>
      </div>
      <div style={{marginTop:"15px",marginLeft:"5px"}}>
      <Carousel/>
      </div>
      </form>
      </div>
      )
    }
  }
  
 
  const description={
    marginLeft:"-12px",width:"340px",marginTop:"0px",height:"20px",color:"#4A5058",
    textAlign: "center",
    font: "italic normal normal 16px/17px Lato",
    letterSpacing: "0px",
    opacity: "1"
  }

  const label={
    color:"#4A5058",fontSize:"19px",
    marginTop:"6px",
     textAlign: "left",
   marginLeft: "-9px", 
   font: "normal normal bold 16px/19px Lato",
   letterSpacing: "0px",
   textTransform: "capitalize",
   opacity: "1"
   }
  const label1={
   color:"#4A5058",fontSize:"19px",
   marginTop:"41px",
    textAlign: "left",
  marginLeft: "-9px", 
  font: "normal normal bold 16px/19px Lato",
  letterSpacing: "0px",
  textTransform: "capitalize",
  opacity: "1"
  }

  const addmoreawards={
    marginTop:"2px",marginBottom:"37px",marginLeft:"85px",
    width: "264px",
    height: "19px",
    textAlign: "left",
    font: "normal normal bold 16px/19px Lato",
    letterSpacing: "0px",
    color: "#B3BCC7",
    opacity: "1"
  }

  const addmorRecog={
    marginTop:"2px",marginBottom:"37px",marginLeft:"85px",
    width: "264px",
    height: "19px",
    textAlign: "left",
    font: "normal normal bold 16px/19px Lato",
    letterSpacing: "0px",
    color: "#B3BCC7",
    opacity: "1"
  }

 
  const sucessbtn={
    marginTop: "-25px",
    marginLeft: "-10px",
  width: "333px",
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
  
  const step={
    marginLeft:"45px",height:"53px",width:"300px",color:"#2EB9AE",fontSize:"17px"
  }