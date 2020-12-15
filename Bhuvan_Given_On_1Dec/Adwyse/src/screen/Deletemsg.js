import React from 'react'
import '../assets/css/deletemsg.css';
// import '../assets/css/speciconform.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
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

export default function SimpleModal() {
             
  
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
    
    
    <div style={modalStyle} className={classes.paper} style={{height:"280px",top:"20%",left:"-1%"}}>
           
           <div className="sanjimage"></div>
<div className="paratext">Are you sure you want to delete the chat with Sanjana Reddy?</div>


{/* successbtn */}
   <Button variant="contained" color="primary" style={{backgroundColor:"#CC5141",width:"340px",marginTop:"16px",height:"50px"}}>
         <span className="">Delete for me and Sanjana Reddy</span>
      </Button>

 <Button variant="contained" color="primary" style={{backgroundColor:"#CC5141",width:"340px",marginTop:"16px",height:"50px"}}>
         <span className="">Delete just for me</span>
      </Button>
      
      <Button variant="contained" color="primary" style={{backgroundColor:"#2EB9AE",width:"340px",marginTop:"16px",height:"50px"}}>
         <span className="">Cancel</span>
      </Button>


</div>
  
  );
  

  return (
    <form className="cardr">
             {/* arrow */}
<div className="header00"></div> 

{/* logo */}
<div className="header100"></div> 
 
      <div className="sanjimage"></div>
<div className="paratext">Are you sure you want to delete the chat with Sanjana Reddy?</div>
 
{/* text with anchortag */}
<div className="regtext00">
Don’t have an account? 
<span className="anch00">Register Now</span>
</div>

    <div>
      <button type="button" onClick={handleOpen} >
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
    </form>
  );
}