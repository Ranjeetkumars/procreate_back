import React, { Component } from "react";
import "../App.css";
import "../assets/css/GetStarted.css";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

export default class GetStarted extends Component {
  onSubmit = () => {
    alert("kkkkkkkkkkkkk");
    return <Redirect to="/Confirmation/" />;
  };

  render() {
    return (
      <div style={main}>
        <div>
          <form
            className="form"
            style={{ maxWidth: "21rem", margin: "0 auto" }}
          >
            <label>
              <div style={{ marginTop: "41px", marginLeft: "-5px" }}></div>
              <div
                className="headingLogo"
                style={{
                  marginTop: "12px",
                  marginLeft: "52px",
                  width: "201px",
                }}
              ></div>
            </label>
            <div></div>
            <p
              style={{
                marginLeft: "37px",
                width: "337px",
                height: "47px",
                font:
                  "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 18px/25px var(--unnamed-font-family-lato);letter-spacing: var(--unnamed-character-spacing-0)",
                color: "var(--dark-gray)",
                textAlign: "left",
                font: "normal normal normal 18px/25px Lato",
                letterSpacing: "0px",
                color: "#4a5058",
                opacity: "1",
              }}
            >
              How would you like to get started ?
            </p>

            <div>
              <label />

              <div className="Card" onClick={this.onSubmit}>
                <br></br>
                <br></br>
                <div className="doctorLog"></div>

                <p
                  style={{
                    margintop: "0",
                    marginLeft: "28px",
                    color: "#FFFFFF",
                    font: "normal normal bold 20px/30px Lato",
                  }}
                >
                  Individual
                </p>

                <div
                  style={{
                    marginTop: "-30px",
                    marginLeft: "30px",
                    font: "italic normal normal 12px/15px Lato",
                    color: "#FFFFFF",
                  }}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed{" "}
                  <br></br>diam nonumy eirmod tempor invidunt ut labore et
                  dolore
                </div>
                <div className="forwardArrow">
                  <b
                    style={{
                      margintop: "0",
                      marginLeft: "-164px",
                      color: "#FFFFFF",
                      font: "normal normal bold 16px/21px Lato",
                    }}
                  >
                    Let’s get started
                  </b>
                </div>
              </div>
              <br></br>

              <div className="Card1">
                <br></br>
                <br></br>
                <div className="organisationLog"></div>

                <p
                  style={{
                    margintop: "0",
                    marginLeft: "29px",
                    color: "#FFFFFF",
                    font: "normal normal bold 20px/30px Lato",
                  }}
                >
                  Hospital/Organisation
                </p>

                <div
                  style={{
                    marginTop: "-30px",
                    textalign: "center",
                    marginLeft: "30px",
                    font: "italic normal normal 12px/15px Lato",
                    color: "#FFFFFF",
                  }}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed{" "}
                  <br></br>diam nonumy eirmod tempor invidunt ut labore et
                  dolore.
                </div>

                <div className="forwardArrow">
                  <b
                    style={{
                      margintop: "0",
                      marginLeft: "-159px",
                      color: "#FFFFFF",
                      font: "normal normal bold 16px/21px Lato",
                    }}
                  >
                    Let’s get started
                  </b>
                </div>
              </div>

              <div>
                <p
                  style={{
                    marginTop: "33px",
                    marginLeft: "21px",
                    width: "288px",
                    height: "40px",
                    letterSpacing: "var(--unnamed-character-spacing-0)",
                    color: "var(--dark-gray)",
                    textAlign: "center",
                    font: "normal normal bold 16px/21px Lato",
                    letterSpacing: "0px",
                    color: "#4A5058",
                    opacity: 1,
                  }}
                >
                  Already have an account?{" "}
                  <a href="#">
                    {" "}
                    <b>Sign In</b>
                  </a>
                </p>

                {/*  <p>Already have an account? <a href="#"> <b>Sign In</b></a></p> */}
              </div>
              <br></br>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const main = {
  marginLeft: "-30px",
  top: "0px",
  left: "0px",
  width: "50%",
  width: "414px",
  height: "896px",
  background: "#FFFFFF   0% 0% no-repeat padding-box",
  opacity: "1",
  /*  margin: "auto", */
};
