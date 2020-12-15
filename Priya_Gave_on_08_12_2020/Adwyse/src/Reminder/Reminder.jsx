import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "primereact/button";
import SVGImages from "../components/icons";
import { Card } from "@material-ui/core";
import "../assets/css/Reminder.css";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    position: "fixed",

    top: `${top}%`,
    left: `${left}%`,

    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    /*   border: "2px solid #000", */
    border: "#f8f9fa",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Reminder() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div>
      <div
        style={modalStyle}
        className={classes.paper}
        style={{ height: "400px", overflow: "scroll", marginTop: "50px" }}
      >
        <img
          src={SVGImages.Video}
          alt=""
          style={{ marginLeft: "135px", width: "49px" }}
        />

        <img
          src={SVGImages.CloseIcon}
          alt=""
          style={{ marginLeft: "330px", marginTop: "-90px" }}
          onClick={handleClose}
        />
        <div>
          <h2
            style={{
              font:
                "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 18px/21px var(--unnamed-font-family-lato)",
              letterSpacing: "var(--unnamed-character-spacing-0)",
              color: "var(--primary-blue)",
              textAlign: "center",
              font: "normal normal bold 18px/21px Lato",
              letterSpacing: "0px",
              color: "#2D5795",
              marginTop: "-20px",
            }}
            id="simple-modal-title"
          >
            Appointment Reminder
          </h2>
          <p
            style={{
              marginLeft: "54px",
              width: "207px",
              height: "19px",
              font:
                "italic normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/26px var(--unnamed-font-family-lato)",
              letterSpacing: "var(--unnamed-character-spacing-0)",
              color: "var(--dark-gray)",
              textAlign: "center",
              font: "italic normal bold 16px/26px Lato",
              letterSpacing: "0px",
              color: "#4A5058",
            }}
            id="simple-modal-title"
          >
            Your video call starts in 5 mins.
          </p>
          <Card style={{ marginTop: "32px" }}>
            {" "}
            <div
              className="reminder"
              style={{ marginTop: "12px", marginLeft: "34px", width: "201px" }}
            >
              {" "}
              <label
                htmlFor="AccountholderName"
                className="p-d-block"
                style={label}
              >
                {" "}
                <i className="pi pi-user"> Name</i>
              </label>
              <p
                style={{
                  top: "286px",
                  marginLeft: "120px",
                  width: "118px",
                  height: "22px",
                  font:
                    "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 18px/var(--unnamed-line-spacing-19) var(--unnamed-font-family-lato)",
                  letterSpacing: "var(--unnamed-character-spacing-0)",
                  color: "var(--dark-gray)",
                  textAlign: "left",
                  font: "normal normal bold 18px/19px Lato",
                  letterSpacing: "0px",
                  color: "#4A5058",
                  opacity: 1,
                }}
              >
                Sonam Kapoor
              </p>
              <label
                htmlFor="AccountholderName"
                className="p-d-block"
                style={label}
              >
                {" "}
                MEDICAL&nbsp;ISSUE
              </label>
              <p
                style={{
                  top: "286px",
                  marginLeft: "120px",
                  width: "118px",
                  height: "22px",
                  font:
                    "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 18px/var(--unnamed-line-spacing-19) var(--unnamed-font-family-lato)",
                  letterSpacing: "var(--unnamed-character-spacing-0)",
                  color: "var(--dark-gray)",
                  textAlign: "left",
                  font: "normal normal bold 18px/19px Lato",
                  letterSpacing: "0px",
                  color: "#CC5141",
                  opacity: 1,
                }}
              >
                Severe&nbsp;Migraine
              </p>
              <label
                htmlFor="AccountholderName"
                className="p-d-block"
                style={label}
              >
                {" "}
                Fees
              </label>
              <p
                style={{
                  top: "286px",
                  marginLeft: "120px",
                  width: "118px",
                  height: "22px",
                  font:
                    "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 18px/var(--unnamed-line-spacing-19) var(--unnamed-font-family-lato)",
                  letterSpacing: "var(--unnamed-character-spacing-0)",
                  color: "var(--dark-gray)",
                  textAlign: "left",
                  font: "normal normal bold 18px/19px Lato",
                  letterSpacing: "0px",
                  color: "#4A5058",
                  opacity: 1,
                }}
              >
                {" "}
                Follow&nbsp;Up&nbsp;•&nbsp;₹700
              </p>
            </div>
          </Card>
          <br></br>
          <h9 style={{ marginLeft: "100px" }}>MEDICAL HISTORY</h9>
          <p
            style={{
              top: "468px",
              marginLeft: "45px",
              width: "270px",
              height: "32px",
              font:
                "var(--unnamed-font-style-normal) normal medium 12px/17px var(--unnamed-font-family-lato)",
              letterSpacing: "var(--unnamed-character-spacing-0)",
              color: "var(--dark-gray)",
              textAlign: "center",
              font: "normal normal medium 12px/17px Lato",
              letterSpacing: "0px",
              color: "#4A5058",
              opacity: 1,
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing nonumy eirmod
            tempor invidunt ut labore et dolore
          </p>
          <br></br>
          <Button
            label="View&nbsp;Patient&nbsp;Profile&nbsp;"
            className="p-button-link"
            style={{ marginLeft: "90px" }}
          >
            {" "}
            <i className="pi pi-chevron-right"></i>
          </Button>
          <img
            src={SVGImages.CallDuration}
            alt=""
            style={{ marginLeft: "70px" }}
          />
          <br></br>
          <br></br>
          <Button
            style={{
              width: "340px",
              height: "50px",
              transform: "translate(-50%)",
              marginLeft: "50%",
              display: "inline-block",
              float: "none !important",
              position: "relative",
              background: "#52B46C 0% 0% no-repeat padding-box;",
              background: "#52B46C 0% 0% no-repeat padding-box;",
              border: "1px solid #2D5795",
            }}
            className="p-button-success"
          >
            Start&nbsp;the&nbsp;appointment
            {/*       <img
            src={SVGImages.}
            alt=""
            style={{ marginLeft: "20px" }}
            onClick={handleClose}
          /> */}
            {/*  <i className="pi  pi-times-circle"></i> */}
            <i
              className="pi pi-check-circle"
              style={{ marginLeft: "20px" }}
            ></i>
          </Button>
          <br></br>
          <br></br>

          <Button
            style={{
              width: "340px",
              height: "50px",
              transform: "translate(-50%)",
              marginLeft: "50%",
              display: "inline-block",
              float: "none !important",
              position: "relative",
              background: "#E24B4B 0% 0% no-repeat padding-box",
              background: "#E24B4B 0% 0% no-repeat padding-box",
              border: "1px solid #2D5795",
            }}
            className="p-button-success"
          >
            Cancel&nbsp;the&nbsp;appointment
            <i
              className="pi  pi-times-circle"
              style={{ marginLeft: "20px" }}
              onClick={handleClose}
            ></i>
            {/*  <img
            src={SVGImages.CloseIcon}
            alt=""
            style={{ marginLeft: "20px" }}
            onClick={handleClose}
          /> */}
            {/*  <i className="pi  pi-times-circle"></i> */}
          </Button>
        </div>
        {/* <Confirmation /> */}
      </div>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
const label = {
  marginLeft: "120px",

  textAlign: "left",
};
