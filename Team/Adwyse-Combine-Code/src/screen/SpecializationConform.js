import React, { Component } from 'react'
import '../speciconform.css';
export default class Connected extends Component {
    render() {
        return (
            <div>
              <div className="coverc"></div>
      <form className="cardc">
      <label  htmlFor="confirmPassword">
      <svg xmlns="http://www.w3.org/2000/svg" width="16.225" height="24.95" viewBox="0 0 16.225 24.95">
        <react class="a1" width="3px" height="24"  transform="translate(-33.565 -56.887)"/>
        <g transform="translate(0 0.351)">
          <line class="a" x1="12" y2="10" transform="translate(35.678 58.649)"/>
        <line class="a" x1="12" y1="10" transform="translate(35.678 69.375)"/></g></svg>

        </label>
       
        {/* arrow */}
<div className="headerc"></div> 

     {/* logo */}
<div className="header1c"></div> 

{/* small title */}
<div className="subtitlec">Lets get started!</div>

{/* label */}
<div className="textuserc">
          <label className="imagesc"><span className="textc"> Email/Phone Number</span></label>
           </div> 
 
{/* text with anchortag */}
<div className="regtextc">
Don’t have an account? <a className="anchc">Register Now</a>
</div>

{/* // image */}
          {/* <div>
          <label />
         <div  className="backgroungimg" >
       </div>
        </div>  */}


      <div className="card card2c">
      <label  htmlFor="confirmPassword">
      <svg xmlns="http://www.w3.org/2000/svg" width="16.225" height="24.95" viewBox="0 0 16.225 24.95">
        <react class="a1" width="3px" height="24"  transform="translate(-33.565 -56.887)"/>
        <g transform="translate(0 0.351)">
          <line class="a" x1="12" y2="10" transform="translate(35.678 58.649)"/>
        <line class="a" x1="12" y1="10" transform="translate(35.678 69.375)"/></g></svg>

        </label>

{/* closeicon */}
        <div className="closeiconc"></div>

{/* label */}
<div className="image1c">
           </div> 

           {/* paragraph */}
           <div className="parac">
           You have selected the following as<br></br> your specialisations, please confirm.
           </div>

          

{/* 3cards in one row */}
           <div className="card3c colorc">
           <label className="image22c"><span className="title32c">Dentist</span>
          </label>
          </div>
          <div className="card4c colorc">
           <label className="image23c"><span className="title32c">pulmonologist</span>
          </label>
          </div>
          <div className="card5c colorc">
           <label className="image24c"><span className="title32c">ENT</span>
          </label>
          </div>



{/* successbtn */}
        <div>
          <label />
          <button className="sucessbtnc" type="submit">
          <span className="logintextc">Confirm & continue</span>
          <div className="rightarrowc"></div>
          </button>
        </div>

        <div className="selecttextc">Select other specialisations</div>


</div>
     

      </form>
    </div>
    // </div>
        )
    }
}
