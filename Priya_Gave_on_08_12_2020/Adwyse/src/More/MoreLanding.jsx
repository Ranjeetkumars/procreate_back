import React, { Component } from "react";

import "../assets/css/ConsultationFees.css";

import { InputNumber } from "primereact/inputnumber";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import SVGImages from "../components/icons";
import "../assets/css/MoreLanding.css";
import { LocalDiningOutlined } from "@material-ui/icons";
export default class MoreLanding extends Component {







  logout(){

     alert("hiiiiiii logout function is executed");

  }









  render() {


    

    return (
      <div className="main">
        <div>
          <form style={{ maxWidth: "23rem", margin: "0 auto" }}>
            <div>
              <p
                style={{
                  marginTop: "25px",
                  marginLeft: "-12px",
                  width: "30px",
                  height: "30px",
                  font:
                    "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 25px/var(--unnamed-line-spacing-34) var(--unnamed-font-family-lato)",
                  letterSpacing: " var(--unnamed-character-spacing-0)",
                  color: "var(--primary-blue)",
                  textAlign: "left",
                  font: "normal normal bold 25px/34px Lato",
                  letterSpacing: "0px",
                  color: "#2D5795",
                  textTransform: "capitalize",
                  opacity: 1,
                }}
              >
                More
              </p>
              <br></br>
              <img src={SVGImages.AccountIcon} alt="" />
              <Button
                className="pi pi-user"
                label="Account"
                className="p-button-link"
              />{" "}
              <i
                className="pi pi-chevron-right"
                style={{ marginLeft: "140px" }}
              ></i>
              <br></br>
              <br></br>
              <img src={SVGImages.MyBlog} alt="" />
              <Button label="My Blogs" className="p-button-link" />
              <i
                className="pi pi-chevron-right"
                style={{ marginLeft: "137px" }}
              ></i>
              <br></br>
              <br></br>
              <img src={SVGImages.AboutUs} alt="" />
              <Button label="About Us" className="p-button-link" />
              <i
                className="pi pi-chevron-right"
                style={{ marginLeft: "132px" }}
              ></i>
              <br></br>
              <br></br>
              <img src={SVGImages.Support} alt="" />
              <Button label="Support" className="p-button-link" />
              <i
                className="pi pi-chevron-right"
                style={{ marginLeft: "139px" }}
              ></i>
              <br></br>
              <br></br>
              <img src={SVGImages.TermsCondition} alt="" />
              <Button label="Terms & Conditions" className="p-button-link" />
              <i
                className="pi pi-chevron-right"
                style={{ marginLeft: "72px" }}
              ></i>
              <br></br>
              <br></br>
              <img src={SVGImages.FAQS} alt="" />
              <Button label="FAQs" className="p-button-link" />
              <i
                className="pi pi-chevron-right"
                style={{ marginLeft: "152px" }}
              ></i>
              <br></br>
              <br></br>
              <img src={SVGImages.RateApplication} alt="" />
              <Button label="Rate Application" className="p-button-link" />
              <i
                className="pi pi-chevron-right"
                style={{ marginLeft: "82px" }}
              ></i>
              <br></br>
              <br></br>
              <Button
                label="Logout"
                className="p-button-link"
                style={{ marginLeft: "95px", marginTop: "43px" }} onClick={this.logout}
              >
                &nbsp;&nbsp;
                <i className="pi pi-sign-out "></i>
              </Button>
              <p
                style={{
                  marginLeft: "50px",
                  marginTop: "20px",
                  width: "196px",
                  height: "38px",
                  font:
                    "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-34) var(--unnamed-font-family-lato)",
                  textAlign: "center",
                  letterSpacing: "var(--unnamed-character-spacing-0)",
                  color: "var(--dark-gray)",
                  font: "normal normal normal 16px/34px Lato",
                  letterSpacing: "0px",
                  color: "#4A5058",
                  opacity: 1,
                }}
              >
                Share App with your friends{" "}
              </p>
              <a href="https://www.facebook.com/"> <img src={SVGImages.FaceBook} alt="" /></a>
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp;&nbsp;
              <a href="https://www.linkedin.com/home"> <img src={SVGImages.LinkedIn} alt="" /></a>
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              <a href="https://web.whatsapp.com/">   <img src={SVGImages.Download} alt="" /></a>
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              <a href="https://web.whatsapp.com/">  <p className="whatsApp"></p> </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
