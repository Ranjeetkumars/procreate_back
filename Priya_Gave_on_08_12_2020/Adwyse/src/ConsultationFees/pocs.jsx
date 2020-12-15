import React, { Component } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import "./AccordionDemo.css";
import { connect } from "react-redux";
import SVGImages from "../components/icons";
import AdwyseHeading from "../components/AdwyseHeading";
import { InputText } from "primereact/inputtext";

import { InputNumber } from "primereact/inputnumber";
class pocs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: null,
      bgColor: "",
      fees: "",
      hourDurationId: "00",
      minDurationId: "00",
      chatHourDurationId: "00",
      chatMinsDurationId: "00",
      chatFees: "",
      VideoCallChatFees: "",
      VideoCallChatHourDurationId: "00",
      FollowUpFeesId: "",
      FollowUphourDurationId: "00",
      FollowUpMinsDurationId: "00",
    };
  }

  submitHandler = (e) => {
    const {
      fees,
      hourDurationId,
      minDurationId,

      chatFees,
      chatHourDurationId,
      chatMinsDurationId,
      VideoCallChatFees,
      VideoCallChatHourDurationId,
      VideoCallChatMinsDurationId,
      FollowUpFeesId,
      FollowUphourDurationId,
      FollowUpMinsDurationId,
    } = this.state;
    e.preventDefault();
    /*  if (!this.state.fees) {
      alert(":::::::::::::::::::::" + this.state.chatFees);
    } else { */
    alert(
      ":::::::::::llllllllllllllll::::::::::" + this.state.chatHourDurationId
    );
    this.props.dispatch({
      type: "Consultation_Fees",
      payload: {
        fees,
        hourDurationId,
        minDurationId,

        chatFees,
        chatHourDurationId,
        chatMinsDurationId,
        VideoCallChatFees,
        VideoCallChatHourDurationId,
        VideoCallChatMinsDurationId,
        FollowUpFeesId,
        FollowUphourDurationId,
        FollowUpMinsDurationId,
      },
    });
    //}
    this.props.history.push("/FirstConsultationFees");
  };

  boxClick = (e) => {
    this.setState({
      bgColor: "burlywood",
    });
  };
  onClick(itemIndex) {
    let activeIndex = this.state.activeIndex ? [...this.state.activeIndex] : [];

    if (activeIndex.length === 0) {
      activeIndex.push(itemIndex);
    } else {
      const index = activeIndex.indexOf(itemIndex);
      if (index === -1) {
        activeIndex.push(itemIndex);
      } else {
        activeIndex.splice(index, 1);
      }
    }

    this.setState({ activeIndex });
  }

  render() {
    return (
      <div style={{ marginLeft: "0px" }}>
        <div style={main}>
          <form
            style={{ maxWidth: "23rem", margin: "0 auto" }}
            onSubmit={this.submitHandler}
          >
            <AdwyseHeading />
            <br></br>
            <p
              style={{
                marginLeft: "42px",
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
                marginLeft: "42px",
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

            <br></br>

            <div className="accordion-demo">
              {/*      <div className="card"> */}
              <Accordion activeIndex={0}>
                <AccordionTab
                  header={
                    <React.Fragment>
                      <i className="pi pi-camera"></i>
                      <span> Video&nbsp;Call</span>
                    </React.Fragment>
                  }
                >
                  <label
                    htmlFor="username1"
                    className="p-d-block"
                    style={label}
                  >
                    Enter your fees <i className="pi pi-info-circle"></i>
                  </label>
                  <InputText
                    style={InputNumber1}
                    id="locale-us"
                    placeholder="₹ 000.00"
                    mode="decimal"
                    locale="en-US"
                    minFractionDigits={2}
                    id="fees"
                    value={this.state.fees}
                    onChange={(e) => this.setState({ fees: e.target.value })}
                  />
                  <InputText
                    style={InputNumber2}
                    id="locale-us"
                    placeholder="$ 000.00"
                    mode="decimal"
                    locale="en-US"
                    minFractionDigits={2}
                  />
                  <label
                    htmlFor="username1"
                    className="p-d-block"
                    style={label2}
                  >
                    Enter the duration of the appointment{" "}
                    <i className="pi pi-info-circle"></i>
                  </label>
                  <InputNumber
                    style={{ width: "54px" }}
                    placeholder="00 hrs"
                    showButtons
                    buttonLayout="horizontal"
                    style={{ width: "4rem", marginLeft: "-15px" }}
                    decrementButtonClassName="p-button-secondary"
                    incrementButtonClassName="p-button-secondary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                    id="hourDurationId"
                    value={this.state.hourDurationId}
                    onValueChange={(e) =>
                      this.setState({ hourDurationId: e.value })
                    }
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <InputNumber
                    style={{ width: "54px" }}
                    placeholder="00 mins"
                    showButtons
                    buttonLayout="horizontal"
                    style={{ width: "4rem", marginLeft: "20px" }}
                    decrementButtonClassName="p-button-secondary"
                    incrementButtonClassName="p-button-secondary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                    id="minDurationId"
                    value={this.state.minDurationId}
                    onValueChange={(e) =>
                      this.setState({ minDurationId: e.value })
                    }
                  />
                </AccordionTab>

                <AccordionTab
                  header={
                    <React.Fragment>
                      <i className="pi pi-envelope"></i>
                      <span> Chat</span>
                    </React.Fragment>
                  }
                >
                  <label
                    htmlFor="username1"
                    className="p-d-block"
                    style={label}
                  >
                    Enter your fees <i className="pi pi-info-circle"></i>
                  </label>
                  <InputNumber
                    style={InputNumber1}
                    id="locale-us"
                    placeholder="₹  000.00"
                    mode="decimal"
                    locale="en-US"
                    minFractionDigits={2}
                    id="chatFees"
                    value={this.state.chatFees}
                    onValueChange={(e) => this.setState({ chatFees: e.value })}
                  />
                  <InputNumber
                    style={InputNumber2}
                    id="locale-us"
                    placeholder="$  000.00"
                    mode="decimal"
                    locale="en-US"
                    minFractionDigits={2}
                  />
                  <label
                    htmlFor="username1"
                    className="p-d-block"
                    style={label2}
                  >
                    Enter the duration of the appointment{" "}
                    <i className="pi pi-info-circle"></i>
                  </label>
                  <InputNumber
                    style={{ width: "54px" }}
                    placeholder="00 hrs"
                    showButtons
                    buttonLayout="horizontal"
                    style={{ width: "4rem", marginLeft: "-15px" }}
                    decrementButtonClassName="p-button-secondary"
                    incrementButtonClassName="p-button-secondary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                    id="chatHourDurationId"
                    value={this.state.chatHourDurationId}
                    onValueChange={(e) =>
                      this.setState({ chatHourDurationId: e.value })
                    }
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <InputNumber
                    style={{ width: "54px" }}
                    placeholder="00 mins"
                    showButtons
                    buttonLayout="horizontal"
                    style={{ width: "4rem", marginLeft: "20px" }}
                    decrementButtonClassName="p-button-secondary"
                    incrementButtonClassName="p-button-secondary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                    id="chatMinsDurationId"
                    value={this.state.chatMinsDurationId}
                    onValueChange={(e) =>
                      this.setState({ chatMinsDurationId: e.value })
                    }
                  />
                </AccordionTab>

                <AccordionTab
                  header={
                    <React.Fragment>
                      <i className="pi pi-video"></i>
                      <span> Video Call & Chat</span>
                    </React.Fragment>
                  }
                >
                  <label
                    htmlFor="username1"
                    className="p-d-block"
                    style={label}
                  >
                    Enter your fees <i className="pi pi-info-circle"></i>
                  </label>
                  <InputNumber
                    style={InputNumber1}
                    id="locale-us"
                    placeholder="₹ 000.00"
                    mode="decimal"
                    locale="en-US"
                    minFractionDigits={2}
                    id="VideoCallChatFees"
                    value={this.state.VideoCallChatFees}
                    onValueChange={(e) =>
                      this.setState({ VideoCallChatFees: e.value })
                    }
                  />
                  <InputNumber
                    style={InputNumber2}
                    id="locale-us"
                    placeholder="$ 000.00"
                    mode="decimal"
                    locale="en-US"
                    minFractionDigits={2}
                  />
                  <label
                    htmlFor="username1"
                    className="p-d-block"
                    style={label2}
                  >
                    Enter the duration of the appointment{" "}
                    <i className="pi pi-info-circle"></i>
                  </label>
                  <InputNumber
                    style={{ width: "54px" }}
                    placeholder="00 hrs"
                    showButtons
                    buttonLayout="horizontal"
                    style={{ width: "4rem", marginLeft: "-15px" }}
                    decrementButtonClassName="p-button-secondary"
                    incrementButtonClassName="p-button-secondary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                    id="VideoCallChatHourDurationId"
                    value={this.state.VideoCallChatHourDurationId}
                    onValueChange={(e) =>
                      this.setState({ VideoCallChatHourDurationId: e.value })
                    }
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <InputNumber
                    style={{ width: "54px" }}
                    placeholder="00 mins"
                    showButtons
                    buttonLayout="horizontal"
                    style={{ width: "4rem", marginLeft: "20px" }}
                    decrementButtonClassName="p-button-secondary"
                    incrementButtonClassName="p-button-secondary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                    id="VideoCallChatMinsDurationId"
                    value={this.state.VideoCallChatMinsDurationId}
                    onValueChange={(e) =>
                      this.setState({ VideoCallChatMinsDurationId: e.value })
                    }
                  />
                </AccordionTab>

                <AccordionTab
                  header={
                    <React.Fragment>
                      <i className="pi  pi-pencil"></i>
                      <span> Follow Up Fees</span>
                    </React.Fragment>
                  }
                >
                  {/*  <AccordionTab header="Follow Up Fees">
                  <img
                    src={SVGImages.Video}
                    alt=""
                    style={{ marginLeft: "26px" }}
                  /> */}
                  <label
                    htmlFor="username1"
                    className="p-d-block"
                    style={label}
                  >
                    Enter your fees <i className="pi pi-info-circle"></i>
                  </label>
                  <InputNumber
                    style={InputNumber1}
                    id="locale-us"
                    placeholder="₹ 000.00"
                    mode="decimal"
                    locale="en-US"
                    minFractionDigits={2}
                    id="FollowUpFeesId"
                    value={this.state.FollowUpFeesId}
                    onValueChange={(e) =>
                      this.setState({ FollowUpFeesId: e.value })
                    }
                  />
                  <InputNumber
                    style={InputNumber2}
                    id="locale-us"
                    placeholder="$ 000.00"
                    mode="decimal"
                    locale="en-US"
                    minFractionDigits={2}
                  />
                  <label
                    htmlFor="username1"
                    className="p-d-block"
                    style={label2}
                  >
                    Enter the duration of the appointment{" "}
                    <i className="pi pi-info-circle"></i>
                  </label>
                  <InputNumber
                    style={{ width: "54px" }}
                    placeholder="00 hrs"
                    showButtons
                    buttonLayout="horizontal"
                    style={{ width: "4rem", marginLeft: "-15px" }}
                    decrementButtonClassName="p-button-secondary"
                    incrementButtonClassName="p-button-secondary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                    id="FollowUphourDurationId"
                    value={this.state.FollowUphourDurationId}
                    onValueChange={(e) =>
                      this.setState({ FollowUphourDurationId: e.value })
                    }
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <InputNumber
                    style={{ width: "54px" }}
                    placeholder="00 mins"
                    showButtons
                    buttonLayout="horizontal"
                    style={{ width: "4rem", marginLeft: "20px" }}
                    decrementButtonClassName="p-button-secondary"
                    incrementButtonClassName="p-button-secondary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                    id="FollowUpMinsDurationId"
                    value={this.state.FollowUpMinsDurationId}
                    onValueChange={(e) =>
                      this.setState({ FollowUpMinsDurationId: e.value })
                    }
                  />
                </AccordionTab>
              </Accordion>
              {/* </div> */}
            </div>

            <br></br>
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
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  alert("::::::::::::" + state.chatHourDurationId);
  return { state: state };
};
export default connect(mapStateToProps)(pocs);

const label = {
  marginLeft: "1px",
  marginTop: "0px",
};
const label2 = {
  marginLeft: "-0px",
  marginTop: "0px",
};
const InputNumber1 = {
  backgroundColor: "#f5f2f2",
  background: "0% 0% no-repeat padding-box padding-box rgb(242, 242, 242)",
  borderRadius: "10px",

  width: "100px",
  height: "50px",
  align: "center",
  borderRadius: "6px",
  left: "37px",
  top: "402px",
  opacity: 1,
};
const InputNumber2 = {
  marginTop: "-71px",
  marginLeft: "31px",
  backgroundColor: "#f5f2f2",
  background: "0% 0% no-repeat padding-box padding-box rgb(242, 242, 242)",
  borderRadius: "6px",
  width: "100px",
  height: "50px",
  align: "center",
  borderRadius: "6px",
  opacity: 1,
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
