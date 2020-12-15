import React, { Component } from "react";
import "../App.css";
import "../assets/css/Entry.css";
import SVGImages from "../components/icons";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
export default class Entry extends Component {
  render() {
    return (
      <div>
        <form className="form" style={{ maxWidth: "23rem", margin: "0 auto" }}>
          <label>
            <a href="#" className="backArrow1"></a>
            <div style={{ marginTop: "41px", marginLeft: "-5px" }}></div>
            <div
              className="headingReset"
              style={{ marginTop: "12px", marginLeft: "101px", width: "201px" }}
            ></div>
          </label>
          <div></div>
          <p
            style={{
              marginTop: "-16px",
              marginLeft: "116px",
              width: "148px",
              height: "24px",
              font:
                "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-20)/var(--unnamed-line-spacing-34) var(--unnamed-font-family-lato)",
              letterSpacing: " var(--unnamed-character-spacing-0)",
              color: "var(--primary-blue)",
              textAlign: "left",
              font: "normal normal bold 20px/34px Lato",
              letterSpacing: "0px",
              color: "#2D5795",
              opacity: 1,
            }}
          >
            Let’s get started!
          </p>
          <br></br>
          <div>
            <label>
              <img
                src={SVGImages.AccountIcon}
                alt=""
                style={{ marginLeft: "24px" }}
              />
              <b
                style={{
                  top: "266px",
                  left: "58px",
                  width: "154px",
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
                Email/Phone Number
              </b>
            </label>

            <InputText
              type="text"
              style={{
                marginLeft: "-3px",
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
          <br></br>
          <br></br>
          <div>
            <Button
              style={{
                width: "340px",
                height: "50px",
                transform: "translate(-50%)",
                marginLeft: "50%",
                display: "inline-block",
                float: "none !important",
                position: "relative",
                background: "#2EB9AE 0% 0% no-repeat padding-box",
                border: "1px solid #2EB9AE",
              }}
              className="p-button-success"
            >
              Login&nbsp;with&nbsp;OTP
              <div className="forwardArrowfirst"></div>
            </Button>
          </div>
          <br></br>
          <br></br>
          <div>
            <Button
              style={{
                width: "340px",
                height: "50px",
                transform: "translate(-50%)",
                marginLeft: "50%",
                display: "inline-block",
                float: "none !important",
                position: "relative",
                background: "#2D5795 0% 0% no-repeat padding-box",
                border: "1px solid #2D5795",
              }}
              className="p-button-success"
            >
              Login&nbsp;with&nbsp;Password
              <div className="forwardArrowtwo"></div>
            </Button>
          </div>

          <p
            style={{
              marginTop: "33px",
              marginLeft: "21px",
              width: "288px",
              height: "40px",
              font:
                "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 14px/17px var(--unnamed-font-family-lato)",
              letterSpacing: "var(--unnamed-character-spacing-0)",
              color: "var(--dark-gray)",
              textAlign: "center",
              font: "normal normal normal 14px/17px Lato",
              letterSpacing: "0px",
              color: "#4A5058",
              opacity: 1,
            }}
          >
            Don’t have an account?{" "}
            <a href="#">
              {" "}
              <b>Register Now</b>
            </a>
          </p>

          <div></div>
          <div>
            <label />
            <br></br>
          </div>
        </form>
      </div>
    );
  }
}
