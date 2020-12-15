import React, { Component } from "react";
import "../App.css";
import "../assets/css/RegistrationUnderReview.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
export default class RegistrationUnderReview extends Component {
  render() {
    return (
      <div style={main}>
        <div>
          <form
            className="form"
            style={{ maxWidth: "23rem", margin: "0 auto" }}
          >
            <label>
              <a href="#" Back Arrow class="backArrowReview"></a>

              <div style={{ marginTop: "41px", marginLeft: "-5px" }}></div>
              <div
                className="headingLogo"
                style={{
                  marginTop: "12px",
                  marginLeft: "101px",
                  width: "201px",
                }}
              ></div>
            </label>
            <div></div>

            <div className="totallogo">
              <div
                className="registrationUnderReviewLog"
                style={{ marginLeft: "80px" }}
              ></div>
            </div>
            <p
              style={{
                marginTop: "50px",
                width: "309px",
                height: "30px",
                font:
                  "var(--unnamed-font-style-normal) normal 600 25px/29px var(--unnamed-font-family-lato)",
                color: "var(--primary-blue)",
                textAlign: "center",
                font: "normal normal 600 25px/29px Lato",
                letterSpacing: "var(--unnamed-character-spacing-0)",
                color: "hsla(216, 54%, 38%, 1)",
              }}
            >
              Doctor, your medical <br></br>registration is under review!
            </p>

            <br></br>
            <br></br>
            <p
              style={{
                marginLeft: "30px",
                width: "260px",
                height: "66px",
                font:
                  "italic normal var(--unnamed-font-weight-normal) 18px/22px var(--unnamed-font-family-lato)",
                letterSpacing: "var(--unnamed-character-spacing-0)",
                color: "var(--dark-gray)",
                textAlign: "center",
                font: "italic normal normal 18px/22px Lato",
                color: "hsla(214, 9%, 32%, 1)",
                opacity: "1",
              }}
            >
              Please feel free to explore the app, scheduling appointments will
              be active post confirmation.
            </p>

            <br></br>
            <p
              style={{
                marginLeft: "30px",
                width: "272px",
                height: "22px",
                font:
                  "italic normal var(--unnamed-font-weight-normal) 18px/22px var(--unnamed-font-family-lato);letter-spacing: var(--unnamed-character-spacing-0)",
                color: "var(--dark-gray)",
                textAlign: "center",
                font: "italic normal normal 18px/22px Lato",
                color: "hsla(214, 9%, 32%, 1)",
                opacity: "1",
              }}
            >
              We will update you via Email & SMS.
            </p>
            <div>
              <label />
              <br></br>

              {/*     <Button
                style={{
                  width: "340px",
                  marginLeft: "17px",
                  height: "50px",
                  background: "var(--green) 0% 0% no-repeat padding-box",
                  background: "#2EB9AE 0% 0% no-repeat padding-box",
                  borderRadius: "6px",
                  opacity: 1,
                }}
              >
                <span class="span" style={{ width: "133px" }}>
                  Let’s&nbsp;get&nbsp;started
                </span>
                <div className="forwardArrowreg"></div>
              </Button> */}
              <Button
                variant="contained"
                color="primary"
                style={{
                  backgroundColor: "#2EB9AE",
                  width: "325px",
                  height: "50px",
                  margin: "auto",
                  marginBottom: "26px",
                  marginLeft: "44px",
                  transform: "translate(-0%)",
                  float: "none !important",
                  display: "inline-block",
                  position: "relative",
                  marginLeft: "-3px",
                }}
              >
                Next
                <i
                  className="pi pi-chevron-right"
                  style={{ marginLeft: "238px" }}
                ></i>
              </Button>
              <br></br>
            </div>
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
  /* marginLeft: "-78px", */
};
