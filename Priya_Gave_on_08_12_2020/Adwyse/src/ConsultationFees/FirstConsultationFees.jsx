import React, { Component } from "react";

import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import "./AccordionDemo.css";
//import "./FirstConsultationFees.css";
import { connect } from "react-redux";
import SVGImages from "../components/icons";
import AdwyseHeading from "../components/AdwyseHeading";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
class FirstConsultationFees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: null,
      bgColor: "",
      fees: " ",
      hourDurationId: "",
      videocall: " ",
      minDurationId: "",

      chatFees: " ",
      chatHourDurationId: " ",
      chatMinsDurationId: " ",

      VideoCallChatFees: " ",
      VideoCallChatHourDurationId: " ",
      VideoCallChatMinsDurationId: " ",

      FollowUpFeesId: " ",
      FollowUphourDurationId: " ",
      FollowUpMinsDurationId: " ",
    };
  }

  componentDidMount() {
    const {
      feesData,
      feesData1,
      feesData2,
      chatData,
      chatData1,
      chatData2,
      VideoCallChatData,
      VideoCallChatData1,
      VideoCallChatData2,
      FollowUpFeesData,
      FollowUpFeesData1,
      FollowUpFeesData2,
    } = this.props;

    if (!feesData == "") {
      //this.setState({ fees: feesData });
      // this.setState({ hourDurationId: feesData1 });

      this.setState({
        fees: feesData,
        hourDurationId: feesData1,
        minDurationId: feesData2,

        chatFees: chatData,
        chatHourDurationId: chatData1,
        chatMinsDurationId: chatData2,

        VideoCallChatFees: VideoCallChatData,
        VideoCallChatHourDurationId: VideoCallChatData1,
        VideoCallChatMinsDurationId: VideoCallChatData2,

        FollowUpFeesId: FollowUpFeesData,
        FollowUphourDurationId: FollowUpFeesData1,
        FollowUpMinsDurationId: FollowUpFeesData2,
      });
    }
  }

  submitHandler = (e) => {
    const { fees, hourDurationId } = this.state;
    e.preventDefault();
    if (!this.state.fees) {
    } else {
      this.props.dispatch({
        type: "Consultation_Fees",
        payload: { fees, hourDurationId },
      });
    }
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
              {/* <Button>{this.props.feesData}</Button> */}
              <Accordion>
                {
                  <AccordionTab
                    header={
                      <React.Fragment>
                        <i className="pi pi-camera"></i>
                        <span>
                          Video&nbsp;Call&nbsp;{" "}
                          <i
                            className="pi pi-check-circle"
                            style={{ backgroundColor: "#3ad09c" }}
                          ></i>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          ₹{this.props.feesData}.{this.props.feesData1}
                          hr&nbsp;&nbsp;
                          {this.props.feesData2}min
                        </span>
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
                      onChange={(e) =>
                        this.setState({ hourDurationId: e.target.value })
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
                      onChange={(e) =>
                        this.setState({ minDurationId: e.target.value })
                      }
                    />
                  </AccordionTab>
                }

                <AccordionTab
                  header={
                    <React.Fragment>
                      <i className="pi pi-envelope"></i>
                      <span> Chat&nbsp;&nbsp;</span>
                      <i
                        className="pi pi-check-circle"
                        style={{ backgroundColor: "#3ad09c" }}
                      ></i>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      ₹{this.props.chatData}.{this.props.chatData1}
                      hr&nbsp;&nbsp;
                      {this.props.chatData2}min
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
                    onChange={(e) =>
                      this.setState({ chatFees: e.target.value })
                    }
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
                    onChange={(e) =>
                      this.setState({ chatHourDurationId: e.target.value })
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
                    onChange={(e) =>
                      this.setState({ chatMinsDurationId: e.target.value })
                    }
                  />
                </AccordionTab>
                <AccordionTab
                  header={
                    <React.Fragment>
                      <i className="pi pi-video"></i>
                      <span> Video Call & Chat</span>
                      &nbsp;&nbsp;
                      <i
                        className="pi pi-check-circle"
                        style={{ backgroundColor: "#3ad09c" }}
                      ></i>
                      &nbsp;&nbsp;&nbsp;&nbsp; ₹{this.props.VideoCallChatData}.
                      {this.props.VideoCallChatData1}
                      hr&nbsp;&nbsp;
                      {this.props.VideoCallChatData2}min
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
                    onChange={(e) =>
                      this.setState({ VideoCallChatFees: e.target.value })
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
                    onChange={(e) =>
                      this.setState({
                        VideoCallChatHourDurationId: e.target.value,
                      })
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
                    onChange={(e) =>
                      this.setState({
                        VideoCallChatMinsDurationId: e.target.value,
                      })
                    }
                  />
                </AccordionTab>
                <AccordionTab
                  header={
                    <React.Fragment>
                      <i className="pi  pi-pencil"></i>
                      <span> Follow Up Fees</span>
                      &nbsp;&nbsp;
                      <i
                        className="pi pi-check-circle"
                        style={{ backgroundColor: "#3ad09c" }}
                      ></i>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      ₹{this.props.FollowUpFeesData}.
                      {this.props.FollowUpFeesData1}
                      hr&nbsp;&nbsp;
                      {this.props.FollowUpFeesData2}min
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
                    id="FollowUpFeesId"
                    value={this.state.FollowUpFeesId}
                    onChange={(e) =>
                      this.setState({ FollowUpFeesId: e.target.value })
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
                    onChange={(e) =>
                      this.setState({ FollowUphourDurationId: e.target.value })
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
                    onChange={(e) =>
                      this.setState({ FollowUpMinsDurationId: e.target.value })
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
  alert("::::::mapdata::::" + state.prsnDetails.fees);
  return {
    feesData: state.prsnDetails.fees,
    feesData1: state.prsnDetails.hourDurationId,
    feesData2: state.prsnDetails.minDurationId,
    chatData: state.prsnDetails.chatFees,
    chatData1: state.prsnDetails.chatHourDurationId,
    chatData2: state.prsnDetails.chatMinsDurationId,

    VideoCallChatData: state.prsnDetails.VideoCallChatFees,
    VideoCallChatData1: state.prsnDetails.VideoCallChatHourDurationId,
    VideoCallChatData2: state.prsnDetails.VideoCallChatMinsDurationId,

    FollowUpFeesData: state.prsnDetails.FollowUpFeesId,
    FollowUpFeesData1: state.prsnDetails.FollowUphourDurationId,
    FollowUpFeesData2: state.prsnDetails.FollowUpMinsDurationId,
  };
};

export default connect(mapStateToProps)(FirstConsultationFees);
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
const color1 = {
  background: "#007ad9",
  borderColor: "#007ad9",
};
