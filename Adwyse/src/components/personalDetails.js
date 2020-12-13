import React, { Component } from 'react'
import '../App.css';
export default class personalDetails extends Component {
    render() {
        return (
         <div>
         <form className="form">

            <div className="backArrow"></div>
            <div className="headingLogo">
            </div>
            <div className="lets">
               <b>Let’s sign you up! </b>
            </div>
            <div className="desc">
               <p>We need some details about you Doctor, so you can get start advising!</p>
            </div>
            <div className="step">
               <b>Step 1 • Personal Details</b>
            </div>
            <div>
               <label>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                     <g transform="translate(-34 -261)">
                        <rect class="a" width="24" height="24" transform="translate(34 261)"/>
                        <g transform="translate(0 -68)">
                           <path class="b" d="M276.264,155.645a8.131,8.131,0,1,1,16.263,0" transform="translate(-238.764 194.868)"/>
                           <circle class="b" cx="4" cy="4" r="4" transform="translate(41.5 332)"/>
                        </g>
                     </g>
                  </svg>
                  <b> First Name</b>
               </label>
               <input style={{fontSize:"18px"}} className="textCss"
                  type="text"
                  id="username"
                  placeholder="Pleae Enter your first name"
                  required
                  ></input>
            </div>
            <div>
               <label>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                     <g transform="translate(-34 -261)">
                        <rect class="a" width="24" height="24" transform="translate(34 261)"/>
                        <g transform="translate(0 -68)">
                           <path class="b" d="M276.264,155.645a8.131,8.131,0,1,1,16.263,0" transform="translate(-238.764 194.868)"/>
                           <circle class="b" cx="4" cy="4" r="4" transform="translate(41.5 332)"/>
                        </g>
                     </g>
                  </svg>
                  <b> Last Name</b>
               </label>
               <input style={{fontSize:"18px"}} className="textCss"
                  type="text"
                  id="username"
                  placeholder="Pleae Enter your last name"
                  required
                  ></input>
            </div>
            <div></div>
            <div>
               <label>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                     <g transform="translate(-35 -560)">
                        <g transform="translate(-187.91 370.08)">
                           <rect class="aa" width="12.214" height="19" rx="3" transform="translate(226.696 191.92)"/>
                           <path class="aa" d="M237.124,191.92v2.034a.68.68,0,0,1-.68.68h-4.068a.68.68,0,0,1-.681-.68V191.92" transform="translate(-1.607 0)"/>
                        </g>
                        <rect class="bb" width="24" height="24" transform="translate(35 560)"/>
                     </g>
                  </svg>
                  <b> Phone Number</b>
               </label>
               <input style={{fontSize:"18px"}} className="textCss"
                  type="text"
                  id="username"
                  placeholder="Enter Number"
                  required
                  ></input>
            </div>
            <div>
               <label>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                     <g transform="translate(-35 -560)">
                        <g transform="translate(-187.91 370.08)">
                           <rect class="aa" width="12.214" height="19" rx="3" transform="translate(226.696 191.92)"/>
                           <path class="aa" d="M237.124,191.92v2.034a.68.68,0,0,1-.68.68h-4.068a.68.68,0,0,1-.681-.68V191.92" transform="translate(-1.607 0)"/>
                        </g>
                        <rect class="bb" width="24" height="24" transform="translate(35 560)"/>
                     </g>
                  </svg>
                  <b> Clinic Number*</b>
               </label>
               <input style={{fontSize:"18px"}} className="textCss"
                  type="text"
                  id="username"
                  placeholder="Alternate Number"
                  required
                  ></input>
            </div>
            <div>
               <p>
                  Note : Your clinic number will only used if the patient wants to connect with you.
               </p>
            </div>
            <div>
               <label>
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                     <g transform="translate(-35 -735)">
                        <rect class="email_a" width="21" height="21" transform="translate(35 735)"/>
                        <g transform="translate(-106.196 527.81)">
                           <path class="email_b" d="M2.042,0H15.405a2,2,0,0,1,2,2V9.193a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V2.042A2.042,2.042,0,0,1,2.042,0Z" transform="translate(143.196 213.511)"/>
                           <path class="email_b" d="M160.076,214.231l-6.973,4.981a1.243,1.243,0,0,1-1.446,0l-7.037-5.026a.372.372,0,0,1,.216-.675h15.009A.4.4,0,0,1,160.076,214.231Z" transform="translate(-0.48 0)"/>
                        </g>
                     </g>
                  </svg>
                  <b> Email Address</b>
               </label>
               <input style={{fontSize:"18px"}} className="textCss"
                  type="text"
                  id="username"
                  placeholder="Please enter your email address"
                  required
                  ></input>
            </div>
            <div>
               <label>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                     <g transform="translate(-35 -851)">
                        <g transform="translate(-135.264 -372.928)">
                           <g transform="translate(172.264 1226.514)">
                              <circle class="gender_a" cx="4" cy="4" r="4" transform="translate(2.714)"/>
                              <path class="gender_a" d="M172.264,1245.3a6.786,6.786,0,1,1,13.571,0" transform="translate(-172.264 -1228.371)"/>
                           </g>
                           <path class="gender_a" d="M190.264,1226.514a3.847,3.847,0,0,1,4.071,3.574,3.268,3.268,0,0,1-3.393,3.574" transform="translate(-5.786 0)"/>
                           <path class="gender_a" d="M191.264,1238.514c3.748,0,6.107,3.038,6.107,6.786" transform="translate(-6.107 -1.858)"/>
                        </g>
                        <rect class="gender_b" width="22" height="22" transform="translate(35 851)"/>
                     </g>
                  </svg>
                  <b> Gender</b>
               </label>
               <select className="textCss" >
                  <option value="0">Select Gender</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Other</option>
               </select>
            </div>
            <div>
               <label>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                     <g transform="translate(-215 -851)">
                        <g transform="translate(148 -595.093)">
                           <path class="dob_a" d="M83.934,1450.739h1.221a1.871,1.871,0,0,1,1.831,1.908v11.446A1.871,1.871,0,0,1,85.155,1466H71.724a1.871,1.871,0,0,1-1.831-1.908v-11.446a1.871,1.871,0,0,1,1.831-1.908h1.221" transform="translate(0 -1.169)"/>
                           <line class="dob_a" x2="3.663" transform="translate(76.608 1449.57)"/>
                           <line class="dob_a" y2="3.052" transform="translate(74.777 1447.739)"/>
                           <line class="dob_a" y2="3.052" transform="translate(82.103 1447.739)"/>
                           <line class="dob_a" x2="17.093" transform="translate(69.893 1454.454)"/>
                        </g>
                        <rect class="dob_b" width="22" height="22" transform="translate(215 851)"/>
                     </g>
                  </svg>
                  <b> Date of Birth</b>
               </label>
               <input style={{fontSize:"18px"}} className="textCss"
                  type="text"
                  id="username"
                  placeholder="Enter Date of Birth"
                  required
                  ></input>
            </div>
            <div>
               <label>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                     <g transform="translate(-35 -964)">
                        <g transform="translate(-33.893 -5025.239)">
                           <path class="dob_a" d="M86.526,6011.59c1.612.528,2.606,1.253,2.606,2.051,0,1.619-4.083,2.931-9.119,2.931s-9.119-1.312-9.119-2.931c0-.8.994-1.523,2.606-2.051" transform="translate(0 -7.095)"/>
                           <g transform="translate(74.429 5991.239)">
                              <path class="dob_a" d="M81.905,5991.239a5.582,5.582,0,0,0-5.583,5.583c0,5.583,5.583,10.05,5.583,10.05s5.584-4.466,5.584-10.05A5.583,5.583,0,0,0,81.905,5991.239Z" transform="translate(-76.322 -5991.239)"/>
                              <circle class="dob_a" cx="1.954" cy="1.954" r="1.954" transform="translate(3.629 3.257)"/>
                           </g>
                        </g>
                        <rect class="dob_b" width="22" height="22" transform="translate(35 964)"/>
                     </g>
                  </svg>
                  <b> Address Line 1</b> 
               </label>
               <input style={{fontSize:"18px"}} className="textCss"
                  type="textarea"
                  id="username"
                  placeholder="Please enter your Flat, House No, Building, Apartment, Clinic etc"
                  required
                  ></input>
            </div>
            <div>
               <label>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                     <g transform="translate(-35 -964)">
                        <g transform="translate(-33.893 -5025.239)">
                           <path class="dob_a" d="M86.526,6011.59c1.612.528,2.606,1.253,2.606,2.051,0,1.619-4.083,2.931-9.119,2.931s-9.119-1.312-9.119-2.931c0-.8.994-1.523,2.606-2.051" transform="translate(0 -7.095)"/>
                           <g transform="translate(74.429 5991.239)">
                              <path class="dob_a" d="M81.905,5991.239a5.582,5.582,0,0,0-5.583,5.583c0,5.583,5.583,10.05,5.583,10.05s5.584-4.466,5.584-10.05A5.583,5.583,0,0,0,81.905,5991.239Z" transform="translate(-76.322 -5991.239)"/>
                              <circle class="dob_a" cx="1.954" cy="1.954" r="1.954" transform="translate(3.629 3.257)"/>
                           </g>
                        </g>
                        <rect class="dob_b" width="22" height="22" transform="translate(35 964)"/>
                     </g>
                  </svg>
                  <b> Address Line 2</b>
               </label>
               <input style={{fontSize:"18px"}} className="textCss"
                  type="textarea"
                  id="username"
                  placeholder="Please enter your Flat, House No, Building, Apartment, Clinic etc"
                  required
                  ></input>
            </div>
            <div>
               <label>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                     <g transform="translate(-35 -964)">
                        <g transform="translate(-33.893 -5025.239)">
                           <path class="dob_a" d="M86.526,6011.59c1.612.528,2.606,1.253,2.606,2.051,0,1.619-4.083,2.931-9.119,2.931s-9.119-1.312-9.119-2.931c0-.8.994-1.523,2.606-2.051" transform="translate(0 -7.095)"/>
                           <g transform="translate(74.429 5991.239)">
                              <path class="dob_a" d="M81.905,5991.239a5.582,5.582,0,0,0-5.583,5.583c0,5.583,5.583,10.05,5.583,10.05s5.584-4.466,5.584-10.05A5.583,5.583,0,0,0,81.905,5991.239Z" transform="translate(-76.322 -5991.239)"/>
                              <circle class="dob_a" cx="1.954" cy="1.954" r="1.954" transform="translate(3.629 3.257)"/>
                           </g>
                        </g>
                        <rect class="dob_b" width="22" height="22" transform="translate(35 964)"/>
                     </g>
                  </svg>
                  <b> Town/City</b>
               </label>
               <input style={{fontSize:"18px"}} className="textCss"
                  type="textarea"
                  id="username"
                  placeholder="Enter Town/City"
                  required
                  ></input>
            </div>
            <div>
               <label>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                     <g transform="translate(-35 -964)">
                        <g transform="translate(-33.893 -5025.239)">
                           <path class="dob_a" d="M86.526,6011.59c1.612.528,2.606,1.253,2.606,2.051,0,1.619-4.083,2.931-9.119,2.931s-9.119-1.312-9.119-2.931c0-.8.994-1.523,2.606-2.051" transform="translate(0 -7.095)"/>
                           <g transform="translate(74.429 5991.239)">
                              <path class="dob_a" d="M81.905,5991.239a5.582,5.582,0,0,0-5.583,5.583c0,5.583,5.583,10.05,5.583,10.05s5.584-4.466,5.584-10.05A5.583,5.583,0,0,0,81.905,5991.239Z" transform="translate(-76.322 -5991.239)"/>
                              <circle class="dob_a" cx="1.954" cy="1.954" r="1.954" transform="translate(3.629 3.257)"/>
                           </g>
                        </g>
                        <rect class="dob_b" width="22" height="22" transform="translate(35 964)"/>
                     </g>
                  </svg>
                  <b> State/Region</b>
               </label>
               <select style={{fontSize:"18px"}} className="textCss">
                  <option value="-1">Select State </option>
                  className="textCss"
               </select>
            </div>
            <div>
               <label className="termcondition">
               I agree to all the Terms & Conditions.
               </label>
            </div>
            <div>
               <label />
               <button className="secondary" type="submit">
               Confirm & Continue
               </button>
            </div>
         </form>
      </div>
        )
    }
}
