import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from 'primereact/button';
import SVGImages from '../components/icons';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
   position:'fixed',

    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Confirmation() {
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


    
    <div style={modalStyle} className={classes.paper}>
        <img src={SVGImages.DoctorIcon} alt=""   style={{  marginLeft: "119px"}}  
 />
 
 <img src={SVGImages.CloseIcon} alt=""   style={{  marginLeft: "126px",    marginTop: "-58px"
}}  onClick={handleClose}       
 />  
 <div>
      <h2  style={{font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 18px/25px var(--unnamed-font-family-lato)",letterSpacing: "var(--unnamed-character-spacing-0)",color: "var(--dark-gray)",textAlign: "center",font:"normal normal bold 18px/25px Lato",letterSpacing: "0px",color: "#4A5058"}} 
      id="simple-modal-title">Hello Doctor, are you sure you want to start using the app as an individual?</h2>
      <Button style={{width: "340px",height: "50px",transform: "translate(-50%)",marginLeft:"50%",display: "inline-block",float: "none !important",position: "relative",background:"var(--green) 0% 0% no-repeat padding-box",background: "#2EB9AE 0% 0% no-repeat padding-box",border: "1px solid #2D5795"
      }} className="p-button-success"  >Confirm&nbsp;&&nbsp;continue
      <div className="forwardArrowtwo"></div></Button>
</div>
      {/* <Confirmation /> */}
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