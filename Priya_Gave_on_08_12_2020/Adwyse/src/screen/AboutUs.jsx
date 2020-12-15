import React, { Component } from "react";
import "../App.css";
import "../assets/css/AboutUs.css";

export default class AboutUs extends Component {
  render() {
    return (
      <div style={main}>
        <div>
          <form
            className="form"
            style={{ maxWidth: "26rem", margin: "0 auto" }}
          >
            <a href="#" className="backArrowAboutUs"></a>
            <p
              style={{
                marginTop: "54px",
                marginLeft: "71px",
                width: "104px",
                height: "30px",
                font:
                  "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 25px/var(--unnamed-line-spacing-34) var(--unnamed-font-family-lato)",
                letterSpacing: "var(--unnamed-character-spacing-0)",
                color: "var(--dark-gray)",
                textAlign: "left",
                font: "normal normal bold 25px/34px Lato",
                letterSpacing: "0px",
                color: "#4A5058",
                opacity: 1,
              }}
            >
              About Us
            </p>
            <br></br>

            <div></div>
            <div
              className="headingLogo"
              style={{ marginTop: "12px", marginLeft: "34px", width: "201px" }}
            ></div>

            <p
              style={{
                marginTop: "0px",
                marginLeft: "36px",
                width: "241px",
                height: "19px",
                font:
                  "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-lato)",
                letterSpacing: "var(--unnamed-character-spacing-0)",
                color: "var(--primary-blue)",
                textAlign: "left",
                font: "normal normal bold 16px/19px Lato",
                letterSpacing: "0",
                color: "#2D5795",
                opacity: "1",
              }}
            >
              Connecting doctors with patients!
            </p>

            <br></br>
            <div>
              <p
                style={{
                  marginTop: "3px",
                  marginLeft: "36px",
                  width: "341px",
                  height: "133px",
                  font:
                    "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-lato)",
                  letterSpacing: "var(--unnamed-character-spacing-0)",
                  color: "var(--dark-gray)",
                  textAlign: "left",
                  font: "normal normal normal 16px/19px Lato",
                  letterSpacing: "0",
                  color: "#4A5058",
                  opacity: "1",
                }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
              {/*        <p className="par">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
               */}{" "}
            </div>
            <div className="aboutUs" style={{ marginTop: "-195px" }}></div>
          </form>
        </div>
      </div>
    );
  }
}
const main = {
  top: "0px",
  left: "0px",
  width: "50%",
  width: "414px",
  height: "896px",
  background: "#FFFFFF   0% 0% no-repeat padding-box",
  opacity: "1",
  margin: "auto",
};
