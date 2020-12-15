import React, { Component } from 'react'
import AdwyseHeading from '../components/AdwyseHeading';
import ResetPassword from '../components/ResetPassword';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default class LoginOtpVerification extends React.Component {

    constructor(){
    super();
    this.state={
     color:successcolor,
     incorrectOtp:{
      title:"INCORRECT OTP",
      message:"The OTP you have entered is incorrect. Please try again.."
    },
     otpResent:{
      title:"OTP RESENT",
       message:"OTP has been resent to your phone number!"
    }
    }
    }
    render(){
    return (
    <div style={main}>
    <div>
    <ResetPassword fromParent ={this.state}/>
    <div style={{marginLeft:"38px"}}>
    <div style={{marginTop:"37px",fontSize:"22px"}}>
        <h3 style={{fontSize:"20px",
                    color:"#2D5795",
                    margin:"initial"}}>
                    OTP Verification
                    </h3>
     </div>
     <div className="p-d-flex p-jc-start">
         <div className="p-mr-2"><span>Enter the OTP sent to?</span></div>
         <div>Nameer@getnoor.com</div>
     </div>
     <div style={{width:"340px",marginTop:"8px"}}>
     <div className="p-fluid p-formgrid p-grid">
     <div className="p-field p-col">
    <InputText style={inputbox} id="otp1" type="text"/>
     </div>
     <div className="p-field p-col">
    <InputText style={inputbox} id="otp2" type="text"/>
     </div>
     <div className="p-field p-col">
         <InputText style={inputbox} id="otp3" type="text"/>
     </div>
     <div className="p-field p-col">
         <InputText style={inputbox} id="otp4" type="text"/>
     </div> 
    </div>
 <div className="p-d-flex p-jc-start">
         <div className="p-mr-2"><span>Enter the OTP sent to?</span></div>
         <div style={{color:"#2D5795",
                      font:"normal normal bold 16px/19px Lato",
                      marginBottom:"24px"}}>Resend OTP</div>
          </div>
     <Button label="Verify OTP" style={{width:"340px",height:"50px",background:"#2EB9AE"}} />  
    </div>
    </div>
    </div>
    </div>
    )
    }
}

const successcolor="#52B46C";
const errorcolor="#CC2929"

const main={
  top: "0px",
  left: "0px",
  width: "50%",
  width: "414px",
  height: "896px",
  background: "#FFFFFF   0% 0% no-repeat padding-box",
  opacity: "1",
  margin:"auto"
  }

  const inputbox={
    width:"72px",height:"72px",background:"#F2F2F2",textAlign:"center"
  }