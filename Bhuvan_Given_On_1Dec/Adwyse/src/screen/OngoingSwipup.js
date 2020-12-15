import React, { Component } from 'react'
import '../assets/css/ongoing.css';
export default class Connected extends Component {
    render() {
        return (
            <div>
      <form className="card00">
       <div className="overscreen1">

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
      
          
          <div className="cam"></div>
           <div className="cameraimage"></div>
           <br></br>
           <label className="cameratitle">Camera Off</label>
          
         
          <div className="mut"> </div>
           <div className="muteimage"></div>
           <br></br>
           <label className="mutetitle">Mute Audio</label>
         
          <div className="phot"></div>
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
