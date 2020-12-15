import React, { Component } from 'react'
import '../App.css';
import '../assets/css/PersonalDetailsStepTwoLogo.css'
import '../assets/css/personalDetails.css';
import SVGImages from '../components/icons';
import Carousel from '../components/Carousel';
import AdwyseHeading from '../components/AdwyseHeading';

export default class PersonalDetailsStepTwo extends Component {
    render() {
        return (
         <div>
         <form className="from">
            <AdwyseHeading/>
            <div className="step">
               <b className="stepNext"> Step 2 • Professional Details </b>
            </div>
            <div>
               <label>
               <img src={SVGImages.Medical} alt="" /> 
               <b style={{ fontSize: "15px" }}> Medical Registration Number*</b>
               </label>
               <input style={{ fontSize: "15px" }} className="textCss"
               type="text"
               id="username"
               placeholder="Please enter the medical registration number"
               required
               ></input>
            </div>
            <div>
               <p className="note">Note : We require your medical registration number for verification purpose. All information shared is encrypted.</p>
            </div>
            <div>
               <label>
               <img src={SVGImages.Qualification} alt="" />
               <b style={{ fontSize: "15px",marginTop: "-19px" }}> Qualification</b>
               </label>
               <input className="textCss"
                  type="text"
                  id="username"
                  placeholder="Please enter your qualification"
                  required
                  style={{ fontSize: "15px" }} ></input>
            </div>
            <div>
               <label>
               <img src={SVGImages.Specialisation} alt="" />
               <b style={{ fontSize: "15px" }}> Specialisation</b>
               </label>
               <select className="selectSpecialization" style={{ fontSize: "15px" }}>
                  <option value="-1">Select your specialisation</option>
               </select>
            </div>
            <div>
               <label>
               <img src={SVGImages.Experience} alt="" />
               <b style={{ fontSize: "15px" }}> Experience</b>
               </label>
               <select className="selectSpecialization" style={{ fontSize: "15px" }}>
                  <option value="-1">Select your Experience</option>
               </select>
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
}
