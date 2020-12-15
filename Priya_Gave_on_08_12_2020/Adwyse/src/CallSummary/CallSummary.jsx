import React, { Component } from "react";
import { Button } from "primereact/button";

import SVGImages from "../components/icons";
import { Card } from "primereact/card";

import { InputNumber } from "primereact/inputnumber";
export default class CallSummary extends Component {
  render() {
    return (
      <div style={{ marginLeft: "0px" }}>
        <div style={main}>
          <form style={{ maxWidth: "23rem", margin: "0 auto" }}>
            <img
              src={SVGImages.Video}
              alt=""
              style={{ marginLeft: "150px", marginTop: "57px" }}
            />
            <br></br> <br></br>
            <p
              style={{
                marginLeft: "130px",
                width: "106px",
                height: "17px",
                font:
                  "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 14px/21px var(--unnamed-font-family-lato)",
                letterSpacing: "2.8px",
                color: "#2EB9AE",
                textAlign: "left",
                font: "normal normal bold 14px/21px Lato",
                letterSpacing: "0px",
                color: "#2EB9AE",
                textTransform: "uppercase",
                opacity: 1,
              }}
            >
              VIDEO CALL
            </p>
            <p
              style={{
                marginLeft: "130px",
                width: "92px",
                height: "27px",
                font:
                  "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 22px/var(--unnamed-line-spacing-19) var(--unnamed-font-family-lato)",
                letterSpacing: "var(--unnamed-character-spacing-0)",
                color: "var(--primary-blue)",
                textAlign: "left",
                font: "normal normal bold 22px/19px Lato",
                letterSpacing: "0px",
                color: "#2D5795",

                opacity: 1,
              }}
            >
              Summary
            </p>
            <div>
              <Card
                style={{
                  width: "25rem",
                  marginBottom: "2em",
                  background: "#F5F5F5 0% 0% no-repeat padding-box",
                  marginLeft: "-15px",
                }}
              >
                <label htmlFor="username1" className="p-d-block" style={label}>
                  Patient &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label>Sonam Kapoor </label>
                </label>

                <label htmlFor="username1" className="p-d-block" style={label}>
                  Call Duration &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  <label>1hr 20m </label>
                </label>

                <label htmlFor="username1" className="p-d-block" style={label}>
                  Fees &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <label>₹800</label>
                </label>
              </Card>
              <img
                src={SVGImages.FollowUp}
                alt=""
                style={{ marginLeft: "150px", marginTop: "20px" }}
              />
              <p
                style={{
                  marginLeft: "30px",
                  marginTop: "20px",
                  height: "22px",
                  font:
                    "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 18px/21px var(--unnamed-font-family-lato)",
                  textAlign: "center",
                  font: "normal normal bold 18px/21px Lato",
                  letterSpacing: "0px",
                  color: "#2D5795",
                  opacity: 1,
                }}
              >
                Follow Up Appointment <i className="pi pi-info-circle"></i>
              </p>
              <p
                style={{
                  marginLeft: "85px",
                  marginTop: "10px",
                  width: "181px",
                  height: "19px",
                  font:
                    "var(--unnamed-font-style-normal) normal 600 var(--unnamed-font-size-16)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-lato)",
                  letterSpacing: "var(--unnamed-character-spacing-0)",
                  color: "var(--dark-gray)",
                  textAlign: "left",
                  font: "normal normal 600 16px/19px Lato",
                  letterSpacing: "0px",
                  color: "#4A5058",
                  opacity: 1,
                }}
              >
                Select follow up structure
              </p>
              <Button
                label="Paid"
                style={small}
                icon="pi pi-check"
                className="p-button-sm"
              />
              <Button
                label="Free"
                style={small}
                className="p-button-sm"
                icon="pi pi-check"
              />
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                variant="contained"
                color="primary"
                style={{
                  backgroundColor: "#2EB9AE",
                  width: "325px",
                  height: "50px",
                  margin: "auto",
                  marginBottom: "26px",
                  marginLeft: "-4px",
                }}
              >
                Confirm &
                Continue&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Button>
              <br></br>
              <br></br>
              <div className="upsmallrec">
                <div className="upsmallrec1">
                  <div className="upsmallrec1">
                    <div className="uprec"></div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const label = {
  marginLeft: "1px",
  marginTop: "0px",
};

const main = {
  top: "0px",
  left: "0px",
  width: "50%",
  width: "414px",
  height: "1681px",
  background: "#FFFFFF   0% 0% no-repeat padding-box",
  opacity: "1",
  margin: "auto",
};
const small = {
  /*   top: "478px",
  left: "82px", */
  width: "70px",
  height: "40px",
  background: "#F2F2F2 0% 0% no-repeat padding-box",
  borderRadius: "6px",
  opacity: 1,
  marginLeft: "50px",
  border: "1px solid #d7dce0",
  color: "black",
};
