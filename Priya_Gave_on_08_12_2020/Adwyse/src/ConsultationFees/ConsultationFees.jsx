import React, { Component } from "react";

import "../assets/css/ConsultationFees.css";
import SVGImages from "../components/icons";

import { InputNumber } from "primereact/inputnumber";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

export default class ConsultationFees extends Component {
  render() {
    return (
      <div className="main">
        <form style={{ maxWidth: "23rem", margin: "0 auto" }}>
          {/*  className="cardr" */}
          {/* arrow */}
          <div className="header00"></div>
          {/* logo */}
          {/* <div className="header100"></div>  */}
          <label>
            <div style={{ marginTop: "41px", marginLeft: "-5px" }}></div>
            <div
              className="headingconsultation"
              style={{ marginTop: "12px", marginLeft: "101px", width: "201px" }}
            ></div>
          </label>
          <p
            style={{
              marginLeft: "90px",
              width: "214px",
              height: "22px",
              font:
                "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 18px/22px var(--unnamed-font-family-lato)",
              letterSpacing: " var(--unnamed-character-spacing-0)",
              color: "var(--green)",
              textAlign: "center",
              font: "normal normal bold 18px/22px Lato",
              letterSpacing: "0px",
              color: "#2EB9AE",
              textTransform: "capitalize",
              opacity: 1,
            }}
          >
            Step 5 • Consultation Fees
          </p>
          <p
            style={{
              marginLeft: "90px",
              width: "222px",
              height: "38px",
              font:
                "italic normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-lato)",
              letterSpacing: " var(--unnamed-character-spacing-0)",
              color: "var(--dark-gray)",
              textAlign: "center",
              font: "italic normal normal 16px/19px Lato",
              letterSpacing: "0px",
              color: "#4A5058",
              opacity: 1,
            }}
          >
            We need some details about your consultation fee structure Doctor.
          </p>
          <Button
            style={{
              textAlign: "center",
              opacity: 1,
              borderRadius: "6px",
              width: "340px",
              height: "50px",
              transform: "translate(-50%)",
              marginLeft: "53%",
              display: "inline-block",
              float: "none !important",
              position: "relative",
              background: "var(--primary-blue) 0% 0% no-repeat padding-box",
              background: "#2D5795 0% 0% no-repeat padding-box",
              border: "1px solid #2EB9AE",
              borderRadius: "6px 6px 0px 0px",
            }}
            className="p-button-success"
          >
            Video&nbsp;Call
            <div className="consultation"></div>
          </Button>
          {/*  <SplitButton label="Save" icon="pi pi-plus" onClick={this.save} model={this.state.items}></SplitButton> */}
          <img src={SVGImages.Video} alt="" style={{ marginLeft: "26px" }} />
          <label></label>
          <br></br>
          {/* <Card> */}
          <b
            style={{
              marginLeft: "30px",
              textAlign: "left",
              width: "107px",
              height: "19px",
              font:
                "var(--unnamed-font-style-normal) normal 600 var(--unnamed-font-size-16)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-lato)",
              letterSpacing: "var(--unnamed-character-spacing-0)",
              color: "var(--dark-gray)",
              textAlign: "left",
              font: "normal normal 600 16px/19px Lato",
              color: "#4A5058",
              opacity: 1,
            }}
          >
            Enter your fees
          </b>{" "}
          <img
            src={SVGImages.Exclamation}
            alt=""
            style={{ marginLeft: "0px" }}
          />
          <br></br>
          <InputNumber
            style={{
              backgroundColor: "#f5f2f2",
              background:
                "0% 0% no-repeat padding-box padding-box rgb(242, 242, 242)",
              borderRadius: "6px",
              marginLeft: "24px",
              width: "151px",
              height: "50px",
              align: "center",
              borderRadius: "6px",
              left: "37px",
              top: "402px",
              opacity: 1,
            }}
            id="locale-us"
            placeholder="₹"
            mode="decimal"
            locale="en-US"
            minFractionDigits={2}
          />
          <InputNumber
            style={{
              marginTop: "-71px",
              marginLeft: "31px",
              backgroundColor: "#f5f2f2",
              background:
                "0% 0% no-repeat padding-box padding-box rgb(242, 242, 242)",
              borderRadius: "6px",
              width: "151px",
              height: "50px",
              align: "center",
              borderRadius: "6px",
              opacity: 1,
            }}
            id="locale-us"
            placeholder="$"
            mode="decimal"
            locale="en-US"
            minFractionDigits={2}
          />
          <p
            style={{
              marginLeft: "20px",
              width: "273px",
              height: "19px",
              font:
                "var(--unnamed-font-style-normal) normal 600 var(--unnamed-font-size-16)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-lato)",
              letterSpacing: " var(--unnamed-character-spacing-0)",
              color: "var(--dark-gray)",
              textAlign: "center",
              font: "normal normal 600 16px/19px Lato",
              letterSpacing: "0px",
              color: "#4A5058",
              opacity: 1,
            }}
          >
            Enter the duration of the appointment
          </p>{" "}
          <img
            src={SVGImages.Exclamation}
            alt=""
            style={{ marginTop: "-74px", marginLeft: "290px" }}
          />
          <InputNumber
            style={{ width: "119px" }}
            showButtons
            buttonLayout="horizontal"
            style={{ width: "4rem", marginLeft: "20px" }}
            decrementButtonClassName="p-button-secondary"
            incrementButtonClassName="p-button-secondary"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <InputNumber
            style={{ width: "119px" }}
            showButtons
            buttonLayout="horizontal"
            style={{ width: "4rem", marginLeft: "20px" }}
            decrementButtonClassName="p-button-secondary"
            incrementButtonClassName="p-button-secondary"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
          />
          <br></br>
          <br></br>
          {/* </Card> */}
          <Button
            style={{
              color: "#4A5058",
              textAlign: "center",
              opacity: 1,
              borderRadius: "6px",
              width: "340px",
              height: "50px",
              transform: "translate(-50%)",
              marginLeft: "53%",
              display: "inline-block",
              float: "none !important",
              position: "relative",
              background: "#E8E8E8 0% 0% no-repeat padding-box",
              border: "1px solid #E8E8E8",
              borderRadius: "6px 6px 0px 0px",
            }}
          >
            Chat
            <div className="chat"></div>
          </Button>
          <br></br>
          <br></br>
          <Button
            style={{
              color: "#4A5058",
              textAlign: "center",
              opacity: 1,
              borderRadius: "6px",
              width: "340px",
              height: "50px",
              transform: "translate(-50%)",
              marginLeft: "53%",
              display: "inline-block",
              float: "none !important",
              position: "relative",
              background: "#E8E8E8 0% 0% no-repeat padding-box",
              border: "1px solid #E8E8E8",
              borderRadius: "6px 6px 0px 0px",
            }}
          >
            Video Call & Chat
            <div className="videocall"></div>
          </Button>
          <br></br>
          <br></br>
          <Button
            style={{
              color: "#4A5058",
              textAlign: "center",
              opacity: 1,
              borderRadius: "6px",
              width: "340px",
              height: "50px",
              transform: "translate(-50%)",
              marginLeft: "53%",
              display: "inline-block",
              float: "none !important",
              position: "relative",
              background: "#E8E8E8 0% 0% no-repeat padding-box",
              border: "1px solid #E8E8E8",
              borderRadius: "6px 6px 0px 0px",
            }}
          >
            Follow Up Fees
            <div className="followUpFees"></div>
          </Button>
          <br></br>
          <br></br>
          <Button
            style={{
              textAlign: "left",
              opacity: 1,
              borderRadius: "6px",
              width: "340px",
              height: "50px",
              transform: "translate(-50%)",
              marginLeft: "53%",
              display: "inline-block",
              float: "none !important",
              position: "relative",
              background: "var(--green) 0% 0% no-repeat padding-box",
              background: "#2EB9AE 0% 0% no-repeat padding-box",
              border: "1px solid #2EB9AE",
            }}
            className="p-button-success"
          >
            Confirm&nbsp;&&nbsp;continue
            <div className="forwardArrowfirst"></div>
          </Button>
          <br></br>
          <br></br>
          <div className="upsmallrec">
            <div className="upsmallrec1">
              <div className="upsmallrec1">
                <div className="uprec">
                  {/* <div   className="smallrec" > <div   className="smallrec" ><div   className="rec" ></div></div> </div> */}{" "}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
