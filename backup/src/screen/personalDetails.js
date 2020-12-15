import React from 'react';
import '../App.css';
import '../assets/css/personalDetails.css';
import Carousel from '../components/Carousel';
import SVGImages from '../components/icons';
import AdwyseHeading from '../components/AdwyseHeading';

const PersonalDetails = () => {
   return (
      <div>
      <form className="from">
         <AdwyseHeading/>
         <div className="lets">
            <b>Let’s sign you up! </b>
         </div>
         <div className="desc">
            <p>We need some details about you Doctor, so you can get start advising!</p>
         </div>
       
         <div className="step">
               <b className="stepNext"> Step 1 • Professional Details </b>
            </div>

         <div>
            <label>
            <img src={SVGImages.AccountIcon} alt="" />
            <b style={{ fontSize: "15px" }}> First Name</b>
            </label>
            <input style={{ fontSize: "15px" }} className="textCss"
            type="text"
            id="username"
            placeholder="Pleae Enter your first name"
            required
            ></input>
         </div>
         <div>
            <label>
            <img src={SVGImages.AccountIcon} alt="" />
            <b style={{ fontSize: "15px" }}> Last Name</b>
            </label>
            <input style={{ fontSize: "15px" }} className="textCss"
            type="text"
            id="username"
            placeholder="Pleae Enter your last name"
            required
            ></input>
         </div>
         <div></div>
         <div>
            <label>
            <img src={SVGImages.PhoneIcon} alt="" />
            <b style={{ fontSize: "15px" }}> Phone Number</b>
            </label>
            <input style={{ fontSize: "15px" }} className="textCss"
            type="text"
            id="username"
            placeholder="Enter Number"
            required
            ></input>
         </div>
         <div>
            <label>
            <img src={SVGImages.PhoneIcon} alt="" />
            <b style={{ fontSize: "15px" }}> Clinic Number*</b>
            </label>
            <input style={{ fontSize: "15px" }} className="textCss"
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
            <img src={SVGImages.Email} alt="" />
            <b style={{ fontSize: "15px" }}> Email Address</b>
            </label>
            <input style={{ fontSize: "15px" }} className="textCss"
            type="text"
            id="username"
            placeholder="Please enter your email address"
            required
            ></input>
         </div>
         <div>
            <label>
            <img src={SVGImages.Gender} alt="" />
            <b style={{ fontSize: "15px" }}> Gender</b>
            </label>
            <select className="textCss"  style={{ fontSize: "15px" }}>
               <option value="0">Select Gender</option>
               <option value="1">Male</option>
               <option value="2">Female</option>
               <option value="3">Other</option>
            </select>
         </div>
         <div>
            <label>
            <img src={SVGImages.CalendarIcon} alt="" />
            <b style={{ fontSize: "15px" }}> Date of Birth</b>
            </label>
            <input style={{ fontSize: "15px" }} className="textCss"
            type="text"
            id="username"
            placeholder="Enter Date of Birth"
            required
            ></input>
         </div>
         <div>
            <label>
            <img src={SVGImages.Address} alt="" />
            <b style={{ fontSize: "15px" }}> Address Line 1</b>
            </label>
            <input style={{ fontSize: "15px" }} className="textCss"
            type="textarea"
            id="username"
            placeholder="Please enter your Flat, House No, Building, Apartment, Clinic etc"
            required
            ></input>
         </div>
         <div>
            <label>
            <img src={SVGImages.Address} alt="" />
            <b style={{ fontSize: "15px" }}> Address Line 2</b>
            </label>
            <input style={{ fontSize: "18px" }} className="textCss"
            type="textarea"
            id="username"
            placeholder="Please enter your Flat, House No, Building, Apartment, Clinic etc"
            required
            ></input>
         </div>
         <div>
            <label>
            <img src={SVGImages.Address} alt="" />
            <b style={{ fontSize: "15px" }}> Town/City</b>
            </label>
            <input style={{ fontSize: "18px" }} className="textCss"
            type="textarea"
            id="username"
            placeholder="Enter Town/City"
            required
            ></input>
         </div>
         <div>
            <label>
            <img src={SVGImages.Address} alt="" />
            <b style={{ fontSize: "15px" }}>  State/Region</b>
            </label>
            <select style={{ fontSize: "18px" }} className="textCss">
            <option value="-1">Select State </option>
            className="textCss"
            </select>
         </div>
         <div>
            <label className="termcondition">
            I agree to all the Terms &amp; Conditions.
            </label>
         </div>
          <div>
            <label />
            <button className="secondary" type="submit" style={{ fontSize: "15px" }}> 
               Confirm &amp; Continue &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <img src={SVGImages.Arrow} alt="" />
               </button>
         </div>
         <div style={{marginTop:"15px",marginLeft:"5px"}}>
          <Carousel/>
          </div> 



      </form>
   </div>
   )
}

export default PersonalDetails