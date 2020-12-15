import React, { Component } from "react";
//import "./Permissions.css";
export default class LocationPermission extends Component {
  render() {
    return (
      <div>
        <form className="aps_form">
          <div className="aps_headingLogo"></div>
          <div className="aps_locbackgoundimg"></div>
          <div>
            <h1 className="aps_locheadingTag">Location Permission!</h1>
            <h1 className="aps_locdescriptionTag">
              Allow this app to access your current location to connect with
              your patients with ease.
            </h1>
          </div>
          <div>
            <button className="aps_btnTag">
              Allow Location Access <div className="aps_rightArrow"></div>
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
