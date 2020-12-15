import React, { Component } from "react";
import "../App.css";
import "../assets/css/ResetPassword.css";
import SVGImages from "../components/icons";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export default class ResetPassword extends Component {
  render() {
    return (
      <div style={main}>
        <div style={{ marginLeft: "-45px" }}>
          <form
            className="form"
            style={{ maxWidth: "23rem", margin: "0 auto" }}
          >
            <label>
              <div style={{ marginTop: "41px", marginLeft: "-5px" }}></div>
              <div
                className="headingReset"
                style={{
                  marginTop: "12px",
                  marginLeft: "101px",
                  width: "201px",
                }}
              ></div>
            </label>
            <div></div>
            <p
              style={{
                marginTop: "-16px",
                marginLeft: "23px",
                width: "165px",
                height: "27px",
                font:
                  "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 22px/var(--unnamed-line-spacing-34) var(--unnamed-font-family-lato)",
                letterSpacing: "var(--unnamed-character-spacing-0)",
                color: "var(--primary-blue)",
                textAlign: "left",
                font: "normal normal bold 22px/34px Lato",
                letterSpacing: "0px",
                color: "#2D5795",
                opacity: 1,
              }}
            >
              Create Password
            </p>
            <p
              style={{
                marginTop: "-6px",
                marginLeft: "23px",
                width: "282px",
                height: "19px",
                font:
                  "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-lato)",
                letterSpacing: "var(--unnamed-character-spacing-0)",
                color: "var(--dark-gray)",
                textAlign: "left",
                font: "normal normal normal 16px/19px Lato",
                letterSpacing: "0px",
                color: "#4A5058",
                opacity: 1,
              }}
            >
              Create a new password for your account
            </p>

            <div>
              <label>
                <img
                  src={SVGImages.LockIcon}
                  alt=""
                  style={{ marginLeft: "26px" }}
                />
                <b
                  style={{
                    fontSize: "15px",
                    width: "69px",
                    height: "19px",
                    font:
                      "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-lato)",
                    letterSpacing: "var(--unnamed-character-spacing-0)",
                    color: "var(--dark-gray)",
                    textAlign: "left",
                    font: "normal normal bold 16px/19px Lato",
                    color: "#4A5058",
                    opacity: 1,
                  }}
                >
                  {" "}
                  Password
                </b>
              </label>

              <InputText
                type="text"
                style={{
                  marginLeft: "3%",
                  align: "center",

                  borderRadius: "6px",
                  background: "#F2F2F2 0% 0% no-repeat padding-box",
                  width: "340px",
                  left: "37px",
                  top: "402px",
                  background: "#F2F2F2 0% 0% no-repeat padding-box",
                  opacity: 1,
                }}
                className="p-d-block p-mb-2"
              />
            </div>

            <div>
              <label>
                <img
                  src={SVGImages.LockIcon}
                  alt=""
                  style={{ marginLeft: "26px" }}
                />
                <b
                  style={{
                    fontSize: "15px",
                    width: "69px",
                    height: "19px",
                    font:
                      "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-lato)",
                    letterSpacing: "var(--unnamed-character-spacing-0)",
                    color: "var(--dark-gray)",
                    textAlign: "left",
                    font: "normal normal bold 16px/19px Lato",
                    color: "#4A5058",
                    opacity: 1,
                  }}
                >
                  {" "}
                  Re-enter Password
                </b>
              </label>
              <InputText
                type="text"
                style={{
                  marginLeft: "3%",
                  align: "center",
                  borderRadius: "6px",
                  background: "#F2F2F2 0% 0% no-repeat padding-box",
                  width: "340px",
                  left: "37px",
                  top: "402px",
                  background: "#F2F2F2 0% 0% no-repeat padding-box",
                  opacity: 1,
                }}
                className="p-d-block p-mb-2"
              />
            </div>
            <div>
              <label />

              {/*   <Button
              style={{
                transform: "translate(-50%)",
                marginLeft: "50%",
                display: "inline-block",
                float: "none !important",
                position: "relative",
                marginTop: "0px",
                width: "340px",
                height: "50px",
                background: "var(--green) 0% 0% no-repeat padding-box",
                background: "#2EB9AE 0% 0% no-repeat padding-box",
                borderRadius: "6px",
                opacity: 1,
              }}
            >
              <span className="span" style={{ width: "133px" }}>
                Reset&nbsp;Password
              </span>
              <div className="resetforwardArrow"></div>
            </Button> */}

              <Button
                variant="contained"
                color="primary"
                style={{
                  backgroundColor: "#2EB9AE",
                  width: "325px",
                  height: "50px",

                  marginBottom: "26px",
                  marginLeft: "18px",
                  transform: "translate(-0%)",
                  float: "none !important",
                  display: "inline-block",
                  position: "relative",
                }}
              >
                Reset&nbsp;Password
                {/*  <i className="pi pi-chevron-right"></i> */}
              </Button>
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
};
