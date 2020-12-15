import React, { Component } from 'react'
import '../App.css';
import '../assets/css/Landing.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';

export default class  Landing extends Component {
    render() {
        return (
            <div>
      <form className="form" style={{    maxWidth: "23rem", margin: "0 auto"}}>
      <label>

      <div style={{marginTop:"41px",marginLeft:"-5px"}} ></div>
            <div className="headingLogo" style={{marginTop:"12px",marginLeft:"101px",width:"201px"}}></div>

        </label>
        <div>
       </div>

       <p style={{marginTop:"0px",marginLeft: "75px",width:"264px",height:"24px",font:"var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-20)/var(--unnamed-line-spacing-34) var(--unnamed-font-family-lato)",letterSpacing: "var(--unnamed-character-spacing-0)",color:"var(--primary-blue)",textAlign:"left" ,font:"normal normal bold 20px/34px Lato;",letterSpacing: "0px",color: "#2D5795",opacity: 1}}>Hello Doctor, let’s sign you in!</p>

       <br></br>
        <div>
          <label />
            <Button  style={{marginTop:"0px",width: "340px",marginLeft: "17px",height: "50px",background: "var(--green) 0% 0% no-repeat padding-box",background: "#2EB9AE 0% 0% no-repeat padding-box",borderRadius: "6px",opacity: 1}} ><span class="span"    style={{ width: "133px",    marginLeft: "-41px",
   
}}
>Sign&nbsp;in</span>
          <div className="forwardArrowland"></div>
          </Button>
          <p  style={{marginTop: "33px",marginLeft: "21px",width: "288px",height: "40px",letterSpacing: "var(--unnamed-character-spacing-0)",color: "var(--dark-gray)",textAlign: "center",font: "normal normal bold 16px/21px Lato",letterSpacing: "0px",color:"#4A5058",opacity: 1}}>Don’t have an account? <a href="#"> <b>Register Now</b></a></p>

 
          <br></br>
          <div 
      
      className="landing" >
       </div>
        </div>
      </form>
    </div>
        )
    }
}
