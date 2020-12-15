import React from 'react'
import '../assets/css/SpeciSelected.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
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
  root: {
    '& > *': {
      margin: theme.spacing(1),
      margin: '14px',
      width: '340px',
      height:"50px"
    },
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
    
    // <div className="card2r">
    <div style={modalStyle} className={classes.paper} style={{height:"634px",width:"391px",top:"6%",left:"-1%"  }}>
      {/* <h2 id="simple-modal-title"></h2> */}
           
        {/* closeicon */}
        <div className="closeicon"></div>

{/* label */}
<div className="textuser1">
           <label className="image1"><span className="text12">Specialisation</span>
          </label>
           </div>

           {/* paragraph */}
           <div className="para">
           Please select your specialisation so your<br></br> patients can connect with you easily.
           </div>
 {/*input filled search icon */}
 <TextField id="outlined-basic" label="Please enter your email or phone number" variant="outlined"  style={{ width:"340px",marginTop:"16px" }}/>
           <div className="searchicon"></div>

        

           {/* <div className="formfield1"> */}
           {/* <br></br>
           <span className="insidetext">Please enter your email or phone number </span>
           <div className="searchicon"></div>
           </div> */}

{/* 3cards in one row */}

           <div className="card3">
           <label className="image22"><span className="title32">Cardiologist</span>
          </label>
          </div>
          <div className="card4">
           <label className="image23"><span className="title32">Neurologist</span>
          </label>
          </div>
          <div className="card5 color">
           <label className="image24"><span className="title32">ENT</span>
           <div className="sidecheck"></div>
          </label>
          </div>
         

{/* 3cards in one row */}

<div className="card3">
           <label className="image25"><span className="title32">Ophthalmologist</span>
          </label>
          </div>
          <div className="card4 color">
           <label className="image26"><span className="title32">Dentist</span>
           <div className="sidecheck"></div>
          </label>
          </div>
          <div className="card5">
           <label className="image27"><span className="title32">Orthopedic</span>
          </label>
          </div> 
         

{/* 3cards in one row */}

<div className="card3 color">

           <label className="image28"><span className="title32">pulmonologist</span>
           <div className="sidecheck"></div>
          </label>
          </div>
          <div className="card4">
           <label className="image29"><span className="title32">Urologist</span>
          </label>
          </div>
          <div className="card5">
           <label className="image30"><span className="title32">Neurosurgeon</span>
          </label>
          </div> 
          

{/* caurosel indicators */}
          <div className="indicators"> </div>
          <div className="indicators1"> </div>
          <div className="indicators2"> </div>
          <div className="indicators3"> </div>

 <Button variant="contained" color="primary" style={{backgroundColor:"#2EB9AE",width:"340px",marginTop:"16px",height:"50px"}}>
         <span className="">Continue</span><span className="rightarrow1"></span>
      </Button>



</div>
     
     
  );

  return (
    <form className="cardr">
             {/* arrow */}
<div className="header00"></div> 

{/* logo */}
<div className="header100"></div> 

{/* small title */}
<div className="subtitle00">Lets get started!</div>

{/* label */}
<div className="textuser00">
     <label className="images00"><span className="text00"> Email/Phone Number</span></label>
      </div> 

 
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