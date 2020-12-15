import React, { Component } from 'react'
import '../App.css';
import '../assets/css/StayConnected.css';
export default class StayConnected extends Component {
    render() {
        return (
          <div>
          <form className="form">
            <a href="#" class="backArrow1"></a>
            <a href="#" class="skip">Skip</a>
            <div>
          </div>
        <div className="stayConnectedimgLog" >
        </div>
          <h3 className="frontp"><b style={{marginLeft:"-55px"}}>Stay Connected</b></h3>
      <p style={{marginLeft:"37px",width:"337",height:"47px",font:"var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 18px/25px var(--unnamed-font-family-lato)",color:"var(--dark-gray)",textAlign:"left",font:"normal normal normal 18px/25px Lato",color: "#4a5058", opacity: 1}}>Get in touch with your patients on messages or call.</p>

        <div>
          <label />
          <button  style={{marginLeft:"37px",width:"345px",height:"50px",background:"var(--green) 0% 0% no-repeat padding-box",background:"#2eb9ae 0% 0% no-repeat padding-box",borderRadius:"6px",opacity:"1",color: "white"}}><span class="span">Next</span>
          <div className="forwardArrow"></div>
          </button>
          <br></br>
        <div className="rec"> <div   className="smallrec" ><div   className="smallrec" ><div   className="smallrec" ></div></div> </div> </div>
        </div>
      </form>
    </div>
        )
    }
}
