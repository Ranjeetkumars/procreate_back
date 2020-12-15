import React, { Component } from 'react'
import '../ongoing.css';
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

       <div className="overscreen">

       <br></br>
      <div className="barone"></div>
       {/* 4cards in one row */}
       <br></br>
      
        <div className="send"></div>
        <div className="roundcircle">
        <span className="roundimage">1</span>
        </div>
       <div className="sendimage"></div>
       <br></br>
       <label className="sendtitle" >Send Message </label>
      
          
          <div className="camera"></div>
           <div className="cameraimage"></div>
           <br></br>
           <label className="cameratitle">Camera Off</label>
          
         
          <div className="mute"> </div>
           <div className="muteimage"></div>
           <br></br>
           <label className="mutetitle">Mute Audio</label>
         
          <div className="photo"></div>
        <div className="roundcircle1">
        <span className="roundimage1">2</span>
        </div>
           <div className="photoimage"> </div>
           <br></br>
           <label className="phototitle">Photo or File</label>
         
          

          <div className="flip"> </div>
           <div className="flipimage"></div>
           <div className="fliptitle">Flip Camera</div>


         
          <div className="speaker"> </div>
           <div className="speakerimage"> </div>
           <div className="speakertitle">Speaker</div>
         
         
       </div>
       
      </form>
    </div>
        )
    }
}
