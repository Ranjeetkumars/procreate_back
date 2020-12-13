import React, { Component } from "react";
//import "../App.css";
export default class CameraPermission extends Component {
  render() {
    return (
      <div>
        <form className="aps_form">
          <div className="aps_headingLogo"></div>
          <div className="aps_camerabackgoundimg"></div>
          <div>
            <h1 className="aps_locheadingTag">Camera Access!</h1>
            <h1 className="aps_locdescriptionTag">
              Allow this app to access your camera so you can connect with your
              patients on video call.
            </h1>
          </div>
          <div>
            <button className="aps_btnTag">
              Allow Camera Permission <div className="aps_rightArrow"></div>
            </button>
          </div>
          <div>
            <a className="aps_anchorTag">Remind me later</a>
          </div>
        </form>
      </div>
    );
  }
}
