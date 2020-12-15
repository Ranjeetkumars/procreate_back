import React from 'react'
import '../assets/css/profile.css';
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
    
    // <div className="card2r">
    <div style={modalStyle} className={classes.paper}style={{height:"671px",width:"367px" ,top:"0%",left:"5%" }}>
      {/* <h2 id="simple-modal-title"></h2> */}
      
{/* closeicon */}
        <div className="closeiconp"></div>

{/* label */}
<div className="textp">Profile Preview </div> 

           {/* paragraph */}
           <div className="parap">
           This is how your profile will be<br></br> displayed to your patients.
           </div>

       

{/* User Details */}
<div className="totalcard">

<div className="userimage"></div>
<br></br>
<br></br><br></br>
         <label className="name">Dr. Mahendar Singh Dhoni</label>
         <br></br>
         <label className="occup">Medical Oncologist</label>
         <br></br>
         <label className="degree">MBBS • MD • PHD</label>

         <div className="badgep">
         <label className="badgetext">₹400 up to 30mins • ₹1,200 up to 1hr</label>
         </div>

{/* specialization logo */}
         <div className="textuserp">
           <label className="imagep"><span className="text12p">Specialisation</span>
          </label>
           </div>
           <br></br>
{/* 4images in row */}
<div className="" style={{ display: "flex",justifyContent:"center" }}>
           <div className="items"  style={{order: "3" ,justifyContent:"center"}}>
<div className="image22p">
           <label className="text3p">Dentist</label>
           <label className="v1"></label>
          </div>

<div className="image23p">
           <label className="text3p">pulmonologist</label>
           <label className="v1"></label>
          </div>

          <div className="image24p">
           <label className="text3p">ENT</label>
           <label className="v1"></label>
          </div>

          <div className="image25p">
           <label className="text3p">Urologist</label>
          </div>
</div></div><br></br>
{/* phone image text */}
         <div className="totalphone">  </div>
        <label className="phone"> <span className="phonetext"> Clinic Number</span></label>
         <br></br>
           <label className="phonenum">+91 9963532682 </label>
         
{/* Email image text */}
         <div className="totalemail">  </div>
        <label className="email"> <span className="emailtext"> email</span></label>
         <br></br>
           <label className="emailadd">msdhoni@gmail.com </label>
         
         {/* Address image text */}
         <div className="totaladdress">  </div>
        <label className="address"> <span className="addresstext"> Address</span></label>
         <br></br>
           <div className="addressadd">8-2-316/2/B, Road # 14, Banjara Hills,<br></br> Hyderabad, Telangana, 500034.</div>


</div>
<Button variant="contained" color="primary" style={{backgroundColor:"#2EB9AE",width:"340px",marginTop:"4px",marginLeft:"-15px",height:"50px"}}>
         <span className="">Confirm & continue</span>
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