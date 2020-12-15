import React, { Component } from 'react'
import '../App.css';
import '../assets/css/RegistrationUnderReview.css';

export default class  RegistrationUnderReview extends Component {
    render() {
        return (
            <div>
      <form className="form">
      <label>
      <a href="#" Back Arrow class="backArrowReview" ></a>

      <div style={{marginTop:"41px",marginLeft:"-5px"}} ></div>
            <div className="headingLogo" style={{marginTop:"12px",marginLeft:"101px",width:"201px"}}></div>

        </label>
        <div>
       </div>

<div className="totallogo">
       <div className="registrationUnderReviewLog">
       </div>
</div>
       <p style={{marginTop:"50px",width:"309px",height:"30px",font:"var(--unnamed-font-style-normal) normal 600 25px/29px var(--unnamed-font-family-lato)",color:"var(--primary-blue)",textAlign:"center" ,font:"normal normal 600 25px/29px Lato",letterSpacing:"var(--unnamed-character-spacing-0)",color:"hsla(216, 54%, 38%, 1)"}}>Doctor, your medical <br></br>registration is under review!</p>


       <br></br><br></br>
      <p style={{ marginLeft:"77px",width:"260px",height:"66px",font:"italic normal var(--unnamed-font-weight-normal) 18px/22px var(--unnamed-font-family-lato)",letterSpacing:"var(--unnamed-character-spacing-0)",color:"var(--dark-gray)",textAlign:"center",font:"italic normal normal 18px/22px Lato",color: "hsla(214, 9%, 32%, 1)",opacity: "1"}}>Please feel free to explore the app, scheduling appointments will be active post confirmation.</p>
    
       <br></br>
      <p style={{ marginLeft:"71px",width:"272px",height:"22px",font:"italic normal var(--unnamed-font-weight-normal) 18px/22px var(--unnamed-font-family-lato);letter-spacing: var(--unnamed-character-spacing-0)",color:"var(--dark-gray)",textAlign:"center",font:"italic normal normal 18px/22px Lato",color: "hsla(214, 9%, 32%, 1)",opacity: "1"}}>We will update you via Email & SMS.</p>
        <div>
          <label />
            <br></br>
            <button className="secondary" ><span class="span"    style={{ width: "133px"}}
>Let’s get started</span>
          <div className="forwardArrow"></div>
          </button>

      
          <br></br>
          
        </div>
      </form>
    </div>
        )
    }
}
