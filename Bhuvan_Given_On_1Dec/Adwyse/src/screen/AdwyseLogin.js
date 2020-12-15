import React, { Component } from 'react';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import AdwyseHeading from '../components/AdwyseHeading';
import SVGImages from '../components/icons';
import ResetPassword from '../components/ResetPassword';


export default class AdwyseLogin extends React.Component {
  

  constructor() {
    super();
    this.state = {
      color: successcolor,
      resetSuccessful:{
        title:"Reset successful",
        message:"Your password has been successfully Reset, you can now try logging in again"
      },
      incorrectEmail:{
        title:"INCORRECT email",
        message:"The email you have entered is incorrect. Please try again.."
      }
     
    };
 }
  render(){
   // alert(""+this.state.color)
   //<ResetPassword fromParent ={this.state}/>
  return (
    <div style={main}>
    <div>
    <div>
    <AdwyseHeading />
    </div>
     <div className="p-field" style={{width:"340px",margin:"auto"}}>
          <div>
           <h3 style={{fontSize:"20px",color:"#2D5795"}}>Let's get started!</h3>
          </div>
          <div>
          <img  src={SVGImages.AccountIcon} alt="" />
          </div>
         <label htmlFor="username1" className="p-d-block" style={label}>Email/Phone Number</label>
         <InputText id="username1" aria-describedby="username1-help" className="p-d-block" placeholder="Please enter your mail or phone number" style={inputbox}/>
         <Button label="Login with OTP" style={loginwithotp} />
         <Button label="Login with Password" style={forgotpassword} />
         <div className="p-d-flex p-jc-center">
         <div className="p-mr-2"><span>Don't Have Account ?</span></div>
         <div><Button label="Register Now" className="p-button-link" style={{marginTop:"-7px"}} /></div>
         </div>
         </div>
         <div>
         <img style={Image} src={SVGImages.Image} alt="" />
         </div>
    </div>
    </div>
  );
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
      width:"340px",height:"50px",margin:"auto",marginBottom:"26px",background:"#F2F2F2"
    }

   const loginwithotp={
    width:"340px",height:"50px",background:"#2EB9AE",marginBottom:"26px"
   }

   const forgotpassword={
    width:"340px",height:"50px",background:"#2D5795 ",marginBottom:"26px"
   }

    const label={
      marginLeft:"26px",marginTop:"-20px"
    }

   

    const Image={
      marginTop:"78px",width:"414px",height:"319px",marginLeft:"1px"
    }