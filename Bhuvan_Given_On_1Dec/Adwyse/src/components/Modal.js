import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import SVGImages from './icons';
import Button from '@material-ui/core/Button';

 
const Modal1 = () => {
  const [open, setOpen] = useState(false);
 
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
 
  return (
    <div style={{width:"414px",height:"896px"}}>
      <button onClick={onOpenModal}>Open modal</button>
      <div className="p-mb-2">
      <Modal style={{width:"220px",height:"220px"}} open={open} onClose={onCloseModal} center>
      <div className="p-d-flex p-flex-column">
    <div className="p-mb-2" style={{width:"71px",margin:"auto",alignItems:"center"}}>
    <img src={SVGImages.Doctoricon} alt="" />
    </div>
    <div className="p-mb-2" style={{width:"306px",font:"normal normal bold 18px/25px Lato",letterSpacing:"0px",color:"#4A5058"}}>Hello Doctor, are you sure you want to start using the app as an individual?</div>
    <Button variant="contained" 
                type="submit" 
                color="primary" 
                style={button}
               >
         Confirm & Continue
         </Button>
    </div>
      </Modal>
      </div>
    </div>
  );
};

export default Modal1;


const button={
  backgroundColor:"#2EB9AE",
}