import React, { Component } from 'react'
import '../settings.css';
export default class Connected extends Component {
    render() {
        return (
            <div>
      <form className="card00">
      <label  htmlFor="confirmPassword">
      <svg xmlns="http://www.w3.org/2000/svg" width="16.225" height="24.95" viewBox="0 0 16.225 24.95">
        <react class="a1" width="3px" height="24"  transform="translate(-33.565 -56.887)"/>
        <g transform="translate(0 0.351)">
          <line class="a" x1="12" y2="10" transform="translate(35.678 58.649)"/>
        <line class="a" x1="12" y1="10" transform="translate(35.678 69.375)"/></g></svg>

        </label>

       <div className="headname">Settings</div>

{/* label */}

<div className="accountimage">
          <label className="accounttext">Account</label>
          <div className="setarrow"></div>
           </div> 
         
           <div className="aboutimage">
          <label className="abouttext">About Us</label>
          <div className="setarrow"></div>
           </div> 

           <div className="contactimage">
          <label className="contacttext">Contact Us</label>
          <div className="setarrow"></div>
           </div> 
           
           <div className="termsimage">
          <label className="termstext">Terms & Conditions</label>
          <div className="setarrow"></div>
           </div>
         

          <div className="faqsimage">
          <label className="faqstext">FAQs</label>
          <div className="setarrow"></div>
           </div>

            <div className="rateimage">
          <label className="ratetext">Rate Application</label>
          <div className="setarrow"></div>
           </div>

         <div className="logoutimage">
          <label className="logouttext">Logout</label>
           </div>

        <div className="sharetext">Share App with your friends</div>


         <div className="fimage"></div>
         <div className="wimage"></div>
         <div className="inimage"></div>
         <div className="upimage"></div>

          <div className="apptext">App v1.0</div>
      </form>
    </div>
        )
    }
}
