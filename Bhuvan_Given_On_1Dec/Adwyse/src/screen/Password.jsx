import React, { Component } from 'react'
import '../App.css';
import '../assets/css/Password.css';
import { InputText } from 'primereact/inputtext';

import { Button } from 'primereact/button';

import SVGImages from '../components/icons';

export default class  Password extends Component {
    render() {
        return (
       
            <div>
              
        <form className="form" style={{    maxWidth: "23rem", margin: "0 auto"}}>
      <label>
      <a href="#" className="backArrow1">
        </a>
      <div style={{marginTop:"41px",marginLeft:"-5px"}} ></div>
            <div className="headingReset" style={{marginTop:"12px",marginLeft:"101px",width:"201px"}}></div>

        </label>
        <div>
       </div>

       <p style={{marginTop:"16px",marginLeft: "15px",width:"152px",height:"27px",font:"var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 22px/var(--unnamed-line-spacing-34) var(--unnamed-font-family-lato)",letterSpacing: " var(--unnamed-character-spacing-0)",color:"var(--primary-blue)",textAlign:"left" ,font:"normal normal bold 22px/34px Lato",letterSpacing: "0px",color: "#2D5795",opacity: 1}}>Enter Password</p>

       <br></br>

       <p style={{marginTop:"-26px",marginLeft: "15px",width:"343px",height:"19px",font:"var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-lato)",letterSpacing: " var(--unnamed-character-spacing-0)",color:"var(--dark-gray)",textAlign:"left" ,font:"normal normal normal 16px/19px Lato",letterSpacing: "0px",color: "#4A5058",opacity: 1}}>Enter the password associated with your account</p>

       <div>
            <label>
            <img src={SVGImages.LockIcon} alt=""   style={{  marginLeft: "16px"}}
 />



            <b style={{top: "266px",left: "58px",width: "154px" ,height: "19px",font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-lato)",letterSpacing: "var(--unnamed-character-spacing-0)",color: "var(--dark-gray)",textAlign: "left",font: "normal normal bold 16px/19px Lato",color: "#4A5058",opacity: 1}}>Password</b>
            </label>
          
            <InputText type="text" style={{    marginLeft:"3%",align:"center",
borderRadius: "6px",background: "#F2F2F2 0% 0% no-repeat padding-box",width: "340px",left: "37px",top: "402px",background:"#F2F2F2 0% 0% no-repeat padding-box",opacity: 1}} className="p-d-block p-mb-2"  />


         </div>
     
         <br></br>
         <br></br>
         <p  style={{marginTop: "0px",marginLeft: "-10%",width: "288px",height: "40px",font: "var(--unnamed-font-style-normal) normal medium var(--unnamed-font-size-16)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-lato)",letterSpacing: "var(--unnamed-character-spacing-0)",color: "var(--dark-gray)",textAlign: "center",font: "normal normal normal 14px/17px Lato",letterSpacing: "0px",color:"#4A5058",opacity: 1}}>Forgot Password?<a href="#"> <b>Reset now!</b></a></p>

      
         <div>
        

      <Button   style={{transform: "translate(-50%)",marginLeft:"50%",display: "inline-block",float: "none !important",position: "relative",marginTop:"0px",width: "340px",height: "50px",background: "var(--green) 0% 0% no-repeat padding-box",background: "#2EB9AE 0% 0% no-repeat padding-box",borderRadius: "6px",opacity: 1}} ><span className="span"    style={{ width: "133px",marginLeft: "-37px",marginTop: "7px"   
}}
                                         
>Login</span>
          <div className="resetforwardArrow"></div>
          </Button>
      
               
         </div>



         <br></br>
         <br></br>
         <div>

        
               

         </div>
        <div>
          <label />
          <br></br>
         
        </div>
      </form>
    </div>
   
        )
    }
}
