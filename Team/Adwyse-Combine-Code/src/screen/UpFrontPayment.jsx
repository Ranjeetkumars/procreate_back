import React, { Component } from 'react'
import '../App.css';
import '../assets/css/StayConnected.css';
import '../assets/css/UpFrontPayment.css';

export default class UpFrontPayment extends Component {
    render() {
        return (
          <div>
          <form className="form">
            <a href="#" class="backArrow1 ">
            </a>
                    <a href="#" class="skip">
                    Skip
            </a>
                <div>
           
    </div>
      <div 
      className="UpFrontPayment" >
       </div>

          <h3><b     style={{marginLeft: "-62px"}}
       >Up Front Payment!</b></h3>
     
     
      <p style={{marginLeft:"37px",width:"337",height:"47px",font:"var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 18px/25px var(--unnamed-font-family-lato)",color:"var(--dark-gray)",textAlign:"left",font:"normal normal normal 18px/25px Lato",color: "#4a5058", opacity: 1}}>Receive your consultation fees prior to appointment.</p>

       
        <div>
          <label />
          <button  style={{marginLeft:"37px",width:"345px",height:"50px",background:"var(--green) 0% 0% no-repeat padding-box",background:"#2eb9ae 0% 0% no-repeat padding-box",borderRadius:"6px",opacity:"1",color: "white"}}><span class="span">Next</span>
          <div className="forwardArrow"></div>
          </button>
          
          <br></br>
         
          <div   className="upsmallrec"  > 
          <div   className="upsmallrec1"  > 
          <div   className="upsmallrec1"  > 
          <div   className="uprec"  > 
       
            {/* <div   className="smallrec" > <div   className="smallrec" ><div   className="rec" ></div></div> </div> */} </div>
            </div>
            </div>
            </div>
            
        </div>
      </form>
    </div>
        )
    }
}
