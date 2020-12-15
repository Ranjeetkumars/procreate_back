import React, { Component } from 'react'
import '../App.css';
import '../assets/css/PrivacyGuaranteed.css';
import '../assets/css/EasyAppointments.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
export default class  EasyAppointments extends Component {
    render() {
        return (
            <div>
      <form className="form" style={{maxWidth: "26rem", margin: "0 auto"}}>
        <a href="#" class="backArrow1 ">      
</a>
        <a href="#" class="skip">
        Skip
</a>
        <div>
       
</div>
       
      <div className="easyAppointments" >
       </div>
       <p style={{marginTop: "26px",marginLeft: "37px",width: "265px",height: "36px",font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 30px/40px var(--unnamed-font-family-lato)",letterSpacing: "var(--unnamed-character-spacing-0)",color: "var(--primary-blue)", textAlign: "left",font: "normal normal bold 30px/40px Lato",letterSpacing: "0px",color: "#2D5795",textTransform: "capitalize",opacity:"1"}}>Easy Appointments!</p>
      <p style={{marginLeft:"37px",width:"337",height:"47px",font:"var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 18px/25px var(--unnamed-font-family-lato)",letterSpacing: "var(--unnamed-character-spacing-0)",color:"var(--dark-gray)",textAlign:"left",font:"normal normal normal 18px/25px Lato",letterSpacing: "0px",color: "#4A5058", opacity: 1}}>Update your availability depending on your convenience.</p>
        <div>
          <label />
          <Button  style={{marginLeft:"37px",width:"345px",height:"50px",background:"var(--green) 0% 0% no-repeat padding-box",background:"#2eb9ae 0% 0% no-repeat padding-box",borderRadius:"6px",opacity:"1",color: "white"}}><span class="span">Next</span>
          <div className="forwardArrow"></div>
          </Button>
          
          <br></br>
          <div   className="esmallrectangle"><div   className="esmallrectangle1">
        <div   className="erectangle" > 
      
           <div   className="esmallrectangle2"></div> 
      </div>
          </div> 
          </div>
        </div>
      </form>
    </div>
        )
    }
}
