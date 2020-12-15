import React, { Component } from "react";
import "../App.css";
import "../assets/css/PrivacyGuaranteed.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
export default class PrivacyGuaranteed extends Component {
  render() {
    return (
      <div style={main}>
        <div>
          <div>
            <form
              className="form"
              style={{ maxWidth: "26rem", margin: "0 auto" }}
            >
              <a href="#" className="backArrow1"></a>
              <a href="#" className="skip1">
                Skip
              </a>
              <div></div>
              <div
                className="privacyGuaranteedLog"
                style={{ marginLeft: "-30px" }}
              ></div>
              <div style={{ marginLeft: "-11px" }}>
                <p
                  style={{
                    marginTop: "26px",
                    marginLeft: "37px",
                    width: "270px",
                    height: "36px",
                    font:
                      "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 30px/40px var(--unnamed-font-family-lato)",
                    letterSpacing: "var(--unnamed-character-spacing-0)",
                    color: "var(--primary-blue)",
                    textAlign: "left",
                    font: "normal normal bold 30px/40px Lato",
                    letterSpacing: "0px",
                    color: "#2D5795",
                    opacity: "1",
                  }}
                >
                  PrivacyGuaranteed!
                </p>
                <p
                  style={{
                    marginLeft: "37px",
                    width: "330px",
                    height: "47px",
                    font:
                      "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 18px/25px var(--unnamed-font-family-lato)",
                    letterSpacing: "var(--unnamed-character-spacing-0)",
                    color: "var(--dark-gray)",
                    textAlign: "left",
                    font: "normal normal normal 18px/25px Lato",
                    color: "#4A5058",
                    opacity: 1,
                  }}
                >
                  All your patient records & medical history in one place, safe
                  & secure.
                </p>
                <div>
                  <label />
                  {/*   <Button  style={{marginLeft:"37px",width:"345px",height:"50px",background:"var(--green) 0% 0% no-repeat padding-box",background:"#2eb9ae 0% 0% no-repeat padding-box",borderRadius:"6px",opacity:"1",color: "white"}}><span class="span">Next</span>
          <div className="forwardArrow"></div>
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
                    }}
                  >
                    Next
                    <i
                      className="pi pi-chevron-right"
                      style={{ marginLeft: "238px" }}
                    ></i>
                  </Button>

                  <br></br>
                  <div className="smallrectangle">
                    <div className="rectangle">
                      <div className="smallrectangle2">
                        <div className="smallrectangle2"> </div>
                      </div>{" "}
                    </div>{" "}
                  </div>
                </div>
              </div>
            </form>
          </div>
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
