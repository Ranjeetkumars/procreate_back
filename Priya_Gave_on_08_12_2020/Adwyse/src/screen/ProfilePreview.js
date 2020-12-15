import React, { Component } from 'react'
import '../profile.css';
export default class Connected extends Component {
    render() {
        return (
            <div>
              <div className="coverp"></div>
      <form className="cardp">
      <label  htmlFor="confirmPassword">
      <svg xmlns="http://www.w3.org/2000/svg" width="16.225" height="24.95" viewBox="0 0 16.225 24.95">
        <react class="a1" width="3px" height="24"  transform="translate(-33.565 -56.887)"/>
        <g transform="translate(0 0.351)">
          <line class="a" x1="12" y2="10" transform="translate(35.678 58.649)"/>
        <line class="a" x1="12" y1="10" transform="translate(35.678 69.375)"/></g></svg>

        </label>
        {/* small title */}
<div className="subtitlep">Lets get started!</div>

        {/* arrow */}
<div className="headerp"></div> 

     {/* logo */}
<div className="header1p"></div> 

{/* small title */}
<div className="subtitlep">Lets get started!</div>

{/* label */}
<div className="textuserp">
          <label className="imagesp"><span className="textp"> Email/Phone Number</span></label>
           </div> 
 
{/* text with anchortag */}
<div className="regtextp">
Don’t have an account? <a className="anchp">Register Now</a>
</div>

{/* // image */}
          {/* <div>
          <label />
         <div  className="backgroungimg" >
       </div>
        </div>  */}


      <div className="card2p">
      <label  htmlFor="confirmPassword">
      <svg xmlns="http://www.w3.org/2000/svg" width="16.225" height="24.95" viewBox="0 0 16.225 24.95">
        <react class="a1" width="3px" height="24"  transform="translate(-33.565 -56.887)"/>
        <g transform="translate(0 0.351)">
          <line class="a" x1="12" y2="10" transform="translate(35.678 58.649)"/>
        <line class="a" x1="12" y1="10" transform="translate(35.678 69.375)"/></g></svg>

        </label>

{/* closeicon */}
        <div className="closeiconp"></div>

{/* label */}
<div className="textp">Profile Preview </div> 

           {/* paragraph */}
           <div className="parap">
           This is how your profile will be<br></br> displayed to your patients.
           </div>

       

{/* User Details */}
<div className="totalcard">

<div className="userimage"></div>
<br></br>
<br></br><br></br>
         <label className="name">Dr. Mahendar Singh Dhoni</label>
         <br></br>
         <label className="occup">Medical Oncologist</label>
         <br></br>
         <label className="degree">MBBS • MD • PHD</label>

         <div className="badgep">
         <label className="badgetext">₹400 up to 30mins • ₹1,200 up to 1hr</label>
         </div>

{/* specialization logo */}
         <div className="textuserp">
           <label className="imagep"><span className="text12p">Specialisation</span>
          </label>
           </div>
{/* 4images in row */}
<div className="image22p">
           <label className="text3p">Dentist</label>
           <label className="v1"></label>
          </div>

<div className="image23p">
           <label className="text3p">pulmonologist</label>
           <label className="v1"></label>
          </div>

          <div className="image24p">
           <label className="text3p">ENT</label>
           <label className="v1"></label>
          </div>

          <div className="image25p">
           <label className="text3p">Urologist</label>
          </div>

{/* phone image text */}
         <div className="totalphone">  </div>
        <label className="phone"> <span className="phonetext"> Clinic Number</span></label>
         <br></br>
           <label className="phonenum">+91 9963532682 </label>
         
{/* Email image text */}
         <div className="totalemail">  </div>
        <label className="email"> <span className="emailtext"> email</span></label>
         <br></br>
           <label className="emailadd">msdhoni@gmail.com </label>
         
         {/* Address image text */}
         <div className="totaladdress">  </div>
        <label className="address"> <span className="addresstext"> Address</span></label>
         <br></br>
           <div className="addressadd">8-2-316/2/B, Road # 14, Banjara Hills,<br></br> Hyderabad, Telangana, 500034.</div>


</div>

{/* successbtn */}
        <div>
          <label />
          <button className="sucessbtnp" type="submit">
          <span className="logintextp">Confirm & continue</span>
          </button>
        </div>


</div>
     

      </form>
    </div>
    // </div>
        )
    }
}
