import React, { Component } from "react";
//import "./Permissions.css";
export default class AllowNotification extends Component {
  render() {
    return (
      <div>
        <form className="aps_form">
          <div className="aps_headingLogo"></div>
          <div className="aps_backgroungimg"></div>
          <div>
            <h1 className="aps_headingTag">Stay Updated!</h1>
            <h1 className="aps_descriptionTag">
              Allow push notifications to get real-time updates on appointments,
              transactions, messages & more!
            </h1>
          </div>
          <div>
            <button className="aps_btnTag">
              Allow Notifications <div className="aps_rightArrow"></div>
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
