import React, { Component } from "react";
import AdwyseHeading from "../components/AdwyseHeading";
import { Checkbox } from "primereact/checkbox";
import SVGImages from "../components/icons";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import A from "./Availability.css";

export default class Availability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      cities: [],
      date9: null,
      date10: null,
      red: true,
      bgColor: "",
      textColor: "black",
    };
  }

  boxClick = (e) => {
    e.preventDefault();
    this.setState({
      bgColor: "#2c0ed0",
      textColor: "white",
    });
  };
  boxClick1 = (e) => {
    e.preventDefault();
    this.setState({
      bgColor1: "#2c0ed0",
      textColor1: "white",
    });
  };
  boxClick2 = (e) => {
    e.preventDefault();
    this.setState({
      bgColor2: "#2c0ed0",
      textColor2: "white",
    });
  };
  boxClick3 = (e) => {
    e.preventDefault();
    this.setState({
      bgColor3: "#2c0ed0",
      textColor3: "white",
    });
  };
  boxClick4 = (e) => {
    e.preventDefault();
    this.setState({
      bgColor4: "#2c0ed0",
      textColor4: "white",
    });
  };
  boxClick5 = (e) => {
    e.preventDefault();
    this.setState({
      bgColor5: "#2c0ed0",
      textColor5: "white",
    });
  };
  boxClick6 = (e) => {
    e.preventDefault();
    this.setState({
      bgColor6: "#2c0ed0",
      textColor6: "white",
    });
  };
  boxClick7 = (e) => {
    e.preventDefault();
    this.setState({
      bgColor7: "#2c0ed0",
      textColor7: "white",
    });
  };
  render() {
    let btn_class = this.state.black ? "blackButton" : "whiteButton";

    return (
      <div style={{ marginLeft: "0px" }}>
        <div style={main}>
          <form style={{ maxWidth: "23rem", margin: "0 auto" }}>
            <AdwyseHeading />
            <div>
              <h3 style={step}>Step 6 • Availability</h3>
            </div>
            <div>
              <p style={description}>
                Please let us know your availability so you can plan your
                appointment & schedule.
              </p>
            </div>
            <div>
              <label style={setWorkSchedule} className="p-d-block">
                {" "}
                <i
                  className="pi pi-calendar"
                  style={{ marginLeft: "-12px" }}
                ></i>
                Set&nbsp;Work&nbsp;Schedule
              </label>
            </div>
            <div>
              <label style={selectWorkingDays} htmlFor="workingdays">
                Please select your working days
              </label>
              <i
                className="pi pi-info-circle"
                style={{ backgroundColor: "#e4dbdb" }}
              ></i>

              {/*  <div className="labelfeeIcon" style={selectWorkingDayIcon}></div> */}
            </div>
            <span style={spamicon}></span>
            <div className="p-grid">
              <div className="p-col">
                <button
                  style={{
                    backgroundColor: this.state.bgColor,
                    color: this.state.textColor,
                    font: "bold 16px / 3px Lato",
                  }}
                  onClick={this.boxClick}
                >
                  Monday
                </button>
              </div>
              <div className="p-col">
                <button
                  label="Tuesday"
                  style={{
                    backgroundColor: this.state.bgColor1,
                    color: this.state.textColor1,
                    font: "bold 16px / 3px Lato",
                  }}
                  onClick={this.boxClick1}
                >
                  Tuesday
                </button>
              </div>
              <div className="p-col">
                <button
                  label="Wednesday"
                  style={{
                    backgroundColor: this.state.bgColor2,
                    color: this.state.textColor2,
                    font: "bold 16px / 3px Lato",
                  }}
                  onClick={this.boxClick2}
                >
                  Wednesday
                </button>
              </div>
            </div>

            <div className="p-grid">
              <div className="p-col">
                <button
                  label="Thursday"
                  style={{
                    backgroundColor: this.state.bgColor3,
                    color: this.state.textColor3,
                    font: "bold 16px / 3px Lato",
                  }}
                  onClick={this.boxClick3}
                >
                  Thursday
                </button>
              </div>
              <div className="p-col">
                <button
                  label="Friday"
                  style={{
                    backgroundColor: this.state.bgColor4,
                    color: this.state.textColor4,
                    font: "bold 16px / 3px Lato",
                  }}
                  onClick={this.boxClick4}
                >
                  Friday
                </button>
              </div>
              <div className="p-col">
                <button
                  label="Saturday"
                  style={{
                    backgroundColor: this.state.bgColor5,
                    color: this.state.textColor5,
                    font: "bold 16px / 3px Lato",
                  }}
                  onClick={this.boxClick5}
                >
                  Saturday
                </button>
              </div>
            </div>
            <button
              label="Sunday"
              style={{
                backgroundColor: this.state.bgColor6,
                color: this.state.textColor6,
                font: "bold 16px / 3px Lato",
              }}
              onClick={this.boxClick6}
            >
              Sunday
            </button>
            <div>
              <div
                className="p-field-checkbox"
                style={{ marginTop: "37px", marginLeft: "-22px" }}
              >
                <Checkbox
                  inputId="binary"
                  checked={this.state.checked}
                  onChange={(e) => this.setState({ checked: e.checked })}
                />

                <label style={includeHoliday} htmlFor="workingdays">
                  Include holidays
                </label>
              </div>
            </div>
            <div style={{ marginTop: "-43px" }}>
              <label style={selectWorkTiming} htmlFor="workingdays">
                Select work timings
              </label>
              <i
                className="pi pi-info-circle"
                style={{ backgroundColor: "#e4dbdb" }}
              ></i>
            </div>
            <div className="p-grid">
              <div className="p-col-6">
                <label htmlFor="time12" style={selectWorkTiming}>
                  {" "}
                  Start Time
                </label>
                <Calendar
                  id="time12"
                  value={this.state.date9}
                  onChange={(e) => this.setState({ date9: e.value })}
                  timeOnly
                  hourFormat="12"
                />
              </div>
              <div className="p-col-6">
                <label htmlFor="time12" style={selectWorkTiming}>
                  {" "}
                  End Time
                </label>
                <Calendar
                  id="time12"
                  value={this.state.date10}
                  onChange={(e) => this.setState({ date10: e.value })}
                  timeOnly
                  hourFormat="12"
                />
              </div>
            </div>
            <div>
              <label />

              <button style={addmoreslot} type="submit">
                <span style={addmoreText}>
                  <i className="pi pi-plus"></i> Add more time slots
                </span>
                <div className="rightArrowIcon"></div>
              </button>
            </div>
            <div>
              <label />

              <Button variant="contained" color="primary" style={sucessbtn}>
                Confirm &
                Continue&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="pi pi-chevron-right"></i>
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
  height: "1681px",
  background: "#FFFFFF   0% 0% no-repeat padding-box",
  opacity: "1",
  margin: "auto",
};

const spamicon = {
  width: "22px",
  height: "22px",
  background: "#E5E5E5 0% 0% no-repeat padding-box",
  opacity: "1",
};

const spammonday = {
  width: "48px",
  height: "13px",
  textAlign: "left",
  font: "normal normal bold 13px/16px Lato",
  letterSpacing: "0px",
  color: "#1E1F20",
  marginLeft: "26px",
  marginTop: "-4px",
  opacity: "1",
};

const monday = {
  width: "115px",
  height: "38px",
  marginLeft: "-9px",
  marginTop: "35px",
  background: "#F2F2F2 0% 0% no-repeat padding-box",
  borderRadius: "6px",
  opacity: "1",
};

const tuesday = {
  width: "115px",
  height: "38px",
  marginLeft: "112px",
  marginTop: "-38px",
  background: "#F2F2F2 0% 0% no-repeat padding-box",
  borderRadius: "6px",
  opacity: "1",
};

const wednesday = {
  width: "115px",
  height: "38px",
  marginLeft: "233px",
  marginTop: "-38px",
  background: "#F2F2F2 0% 0% no-repeat padding-box",
  borderRadius: "6px",
  opacity: "1",
};

const friday = {
  width: "115px",
  height: "38px",
  marginLeft: "112px",
  marginTop: "-38px",
  background: "#F2F2F2 0% 0% no-repeat padding-box",
  borderRadius: "6px",
  opacity: "1",
};

const saturday = {
  width: "115px",
  height: "38px",
  marginLeft: "233px",
  marginTop: "-38px",
  background: "#F2F2F2 0% 0% no-repeat padding-box",
  borderRadius: "6px",
  opacity: "1",
};

const sunday = {
  width: "115px",
  height: "38px",
  marginLeft: "129px",
  marginTop: "25px",
  background: "#F2F2F2 0% 0% no-repeat padding-box",
  borderRadius: "6px",
  opacity: "1",
};

const startTime = {
  width: "150px",
  height: "50px",
  marginLeft: "-11px",
  marginTop: "-8px",
  background: "#FFFFFF 0% 0% no-repeat padding-box",
  border: "1px solid #F0F0F0",
  borderRadius: "8px",
  opacity: "1",
};

const selectWorkingDayIcon = {
  marginLeft: "208px",
  marginTop: "-32px",
};

const workTimingIcon = {
  marginLeft: "127px",
  marginTop: "-32px",
};

const selectWorkingDays = {
  width: "223px",
  height: "19px",
  textAlign: "left",
  font: "normal normal 600 16px/19px Lato",
  letterSpacing: "0px",
  color: "#4A5058",
  opacity: "1",
};

const description = {
  marginLeft: "-12px",
  width: "340px",
  marginTop: "0px",
  height: "20px",
  color: "#4A5058",
  textAlign: "center",
  font: "italic normal normal 16px/17px Lato",
  letterSpacing: "0px",
  opacity: "1",
};

const step = {
  marginLeft: "77px",
  height: "53px",
  width: "300px",
  color: "#2EB9AE",
  fontSize: "17px",
  marginBottom: "21px",
};

const setWorkSchedule = {
  marginTop: "32px",
  /*  marginLeft: "-10px", */
  height: "53px",
  width: "300px",
  color: "#2EB9AE",
  fontSize: "17px",
  /*   marginTop: "43px", */
  /* textAlign: "left", */
  font: "normal normal bold 18px/22px Lato",
  width: "152px",
  height: "22px",
  letterSpacing: "0px",
  /*   marginLeft: "22px", */
  color: "#2D5795",
  opacity: "1",
  marginleft: "0px",
};

const includeHoliday = {
  width: "115px",
  height: "18px",

  /*   marginTop: "-50px", */
  font: "normal normal bold 16px/24px Lato",
  letterSpacing: "0px",
  color: "#1E1F20",
  opacity: "1",
  marginLeft: "10px",
};

const selectWorkTiming = {
  width: "140px",
  height: "19px",
  textAlign: "left",
  marginTop: "43px",
  font: "normal normal bold 16px/17px Lato",
  letterSpacing: "0px",
  color: "#4A5058",
  opacity: "1",
};

const sucessbtn = {
  marginTop: "20px",
  marginLeft: "-6px",
  width: "340px",
  height: "50px",
  background: "#2EB9AE 0% 0% no-repeat padding-box",
  borderRadius: "6px",
  opacity: "1",
};

const addmoreslot = {
  marginTop: "20px",
  marginLeft: "-6px",
  border: "1px solid #E0E0E0",
  width: "340px",
  height: "50px",
  borderRadius: "6px",
  opacity: "1",
};

const logintext = {
  top: "381px",
  float: "left",
  marginTop: "-3px",
  marginLeft: "-33px",
  width: "231px",
  height: "22px",
  /* text-align: left; */
  font: "normal normal bold 18px/22px Lato",
  letterSpacing: "0px",
  color: "#FFFFFF",
  opacity: "1",
};

const addmoreText = {
  top: "381px",
  float: "left",
  marginTop: "-3px",
  marginLeft: "44px",
  width: "231px",
  height: "22px",
  textAlign: "center",
  font: "normal normal bold 15px/18px Lato",
  letterSpacing: "0px",
  color: "#2C1C13",
  opacity: "1",
};
