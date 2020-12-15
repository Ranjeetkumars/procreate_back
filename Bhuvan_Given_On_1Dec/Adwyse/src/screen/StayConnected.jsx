import React, { Component } from 'react'
import '../App.css';
import '../assets/css/StayConnected.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
export default class StayConnected extends Component {
    render() {
        return (
          <div>
          <form className="form" style={{maxWidth: "26rem", margin: "0 auto"}}>
            <a href="#" className="backArrow1"></a>
            <a href="#" className="skip">Skip</a>
            <div>
          </div>
        <div className="stayConnectedimgLog" >
        </div>
          <p style={{marginLeft: "37px",width: "218px",height: "36px",font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold",letterSpacing: "var(--unnamed-character-spacing-0)) 30px/40px var(--unnamed-font-family-lato)",color: "var(--primary-blue)", textAlign: "left",font: "normal normal bold 30px/40px Lato",letterSpacing: "0px",color: "#2D5795",opacity:"1"}}>Stay Connected</p>
      <p style={{marginLeft:"37px",width:"270px",height:"47px",font:"var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 18px/25px var(--unnamed-font-family-lato)",letterSpacing: "var(--unnamed-character-spacing-0)",color: "var(--dark-gray)",textAlign:"left",font:"normal normal normal 18px/25px Lato",color: "#4A5058", opacity: 1}}>Get in touch with your patients on messages or call.</p>

        <div>
          <label />
          <Button   style={{marginLeft:"37px",width:"345px",height:"50px",background:"var(--green) 0% 0% no-repeat padding-box",background:"#2eb9ae 0% 0% no-repeat padding-box",borderRadius:"6px",opacity:"1",color: "white"}}><span class="span">Next</span>
          <div className="forwardArrow"></div>
          </Button> 

          <br></br>
        <div className="rec"> <div   className="smallrec" ><div   className="smallrec" ><div   className="smallrec" ></div></div> </div> </div>
        </div>
      </form>
    </div>
        )
    }
}



