import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "primereact/button";
import SVGImages from "../components/icons";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    position: "fixed",
    /*   display: "flex", */

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
    /* border: "2px solid #000", */
    border: "#f8f9fa",
    /*   border: "2px solid #e4e4e4", */
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ReminderCancel() {
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
    <div style={main}>
      <div></div>

      <div style={modalStyle} className={classes.paper}>
        <img
          src={SVGImages.MedicalFolder}
          alt=""
          style={{ marginLeft: "135px", width: "49px" }}
        />

        <img
          src={SVGImages.CloseIcon}
          alt=""
          style={{ marginLeft: "133px", marginTop: "-18px" }}
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
            }}
            id="simple-modal-title"
          >
            Doctor, are you sure you want to cancel the appointment ?
          </h2>

          <p
            style={{
              marginLeft: "54px",
              width: "232px",
              height: "45px",
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
            Note : The fees of the appointment will be refunded to the patient.
          </p>
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
            Confirm&nbsp;&nbsp;Cancel Appointment
            <img
              src={SVGImages.CloseIcon}
              alt=""
              style={{ marginLeft: "20px" }}
              onClick={handleClose}
            />
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
