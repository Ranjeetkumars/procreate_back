import React from 'react'
import '../assets/css/speciconform.css';
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
    
    
    <div style={modalStyle} className={classes.paper} style={{height:"388px",width:"394px" ,top:"25%",left:"0%" }}>
           
        {/* closeicon */}
        <div className="closeiconc"></div>

{/* label */}
<div className="image1c">
           </div> 

           {/* paragraph */}
           <div className="parac">
           You have selected the following as<br></br> your specialisations, please confirm.
           </div>

          
{/* 3cards in one row */}
 
           <div className="card3c colorc">
           <label className="image22c"><span className="title32c">Dentist</span>
          </label>
          </div>
          <div className="card4c colorc">
           <label className="image23c"><span className="title32c">pulmonologist</span>
          </label>
          </div>
          <div className="card5c colorc">
           <label className="image24c"><span className="title32c">ENT</span>
          </label>
          </div>



{/* successbtn */}
        <Button variant="contained" color="primary" style={{backgroundColor:"#2EB9AE",width:"340px",marginTop:"16px",height:"50px"}}>
         <span className="">Continue</span><span className="rightarrowc"></span>
      </Button>
       

        <div className="selecttextc">Select other specialisations</div>


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

    <div >
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