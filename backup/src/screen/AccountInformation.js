import React, { Component } from 'react'
import Carousel from '../components/Carousel';
import AdwyseHeading from '../components/AdwyseHeading';



export default class AccountInformation extends Component {
    render() {
        return (
            <div className="main">
            <form className="form" style={{marginLeft: "51px"}}>
            <AdwyseHeading/>
            <div>
            <h3 style={step}>Step 4 • Account Information</h3>
            </div>


            
            <div style={{marginLeft:"-8px",marginTop:"19px"}} className="usernameicon">
            </div>
            <div>
            <label style={{marginLeft:"19px",marginTop:"-5px"}}  htmlFor="confirmPassword">Account holder Name</label>
            <input className={inputbox_awards2}
            type="text"
            id="awards" style={{background:"#F2F2F2",marginLeft:"-9px",fontSize:"18px"}}
            placeholder="Please enter account holder name"
            required></input>
          </div>
          <div style={{marginLeft:"-8px",marginTop:"40px"}} className="usernameicon">
            </div>
            <div>
            <label style={{marginLeft:"19px",marginTop:"-5px"}}  htmlFor="accountNumber">Account Number*</label>
            <input className={inputbox_awards2}
            type="text"
            id="awards" style={{background:"#F2F2F2",marginLeft:"-9px",fontSize:"18px"}}
            placeholder="Please enter account number"
            required></input>
            <p  style={noteBankAccountNo}>Note : All your account information is safe & encrypted.</p>
          </div>
          <div style={{marginLeft:"-8px",marginTop:"14px"}} className="usernameicon">
          </div>
          <div>
            <label style={{marginLeft:"19px",marginTop:"-5px"}}  htmlFor="bankName">Bank Name</label>
            <input className={inputbox_awards2}
            type="text"
            id="awards" style={{background:"#F2F2F2",marginLeft:"-9px",fontSize:"18px"}}
            placeholder="Please enter bank name"
            required></input>
          </div>
          <div style={{marginLeft:"-8px",marginTop:"39px"}} className="usernameicon">
          </div>
          <div>
            <label style={{marginLeft:"19px",marginTop:"-5px"}}  htmlFor="bankName">IFSC Code</label>
            <input style={inputbox_awards2} 
            type="text"
            id="awards" style={{background:"#F2F2F2",marginLeft:"-9px",fontSize:"18px"}}
            placeholder="Please enter ifsc code"
            required></input>
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

const inputboxAwards={
  marginTop:"15px",    
marginLeft: "-9px",
marginRight: '-9px',
width: '340px',
fontSize:"15px",
height: '50px',

background:"#F2F2F2 0% 0% no-repeat padding-box",
borderRadius: '6px',
opacity: '1'
}

const inputbox_awards2={
  fontSize:"12px",
  marginLeft:"-9px",
marginRight: "-9px",
width: "340px",
height: "50px",
background: "#F2F2F2 0% 0% no-repeat padding-box",
background:"#F2F2F2",
borderRadius: "6px",
opacity: "1"
}



const sucessbtn={
  marginTop: "20px",
  marginLeft: "-10px",
width: "330px",
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
  marginLeft:"45px",height:"53px",width:"300px",color:"#2EB9AE",fontSize:"17px",marginTop:"-13px"
}

const noteBankAccountNo={
  textAlign:"left",
  font:"italic normal normal 14px/21px Lato",
  letterSpacing:"0px",
  color:"#B3BCC7",
  marginLeft:"-8px",
  width:"362px",
  opacity:"1"
}

