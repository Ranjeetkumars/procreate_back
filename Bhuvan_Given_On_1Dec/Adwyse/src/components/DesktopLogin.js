import React from 'react';
import '../assets/css/desktoplogin.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SVGImg from '../components/icons';
import Grid from '@material-ui/core/Grid';
import Slider from 'infinite-react-carousel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const settings =  {
      
};
export default function DesktopLogin() {
  const classes = useStyles();

  return (
    <form className="Desktopcard" >

    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
    

<Slider dots>
          <div>
          <img  src={SVGImg.Image} alt=""style={{width: "640px",height: "735px"}} />

          </div>
          <div>
          <img  src={SVGImg.Image} alt=""style={{width: "640px",height: "735px"}} />

         </div>
          <div>
          <img  src={SVGImg.Image} alt=""style={{width: "640px",height: "735px"}} />

          </div>
          <div>
          <img  src={SVGImg.Image} alt=""style={{width: "640px",height: "735px"}} />

          </div>
     
        </Slider>
        
        </Grid>


        <Grid item xs={6} className="logindetails">
  
{/* logo */}
<div className="logo"></div> 

{/* small title */}
<div className="doctortitle">Hello Doctor, let’s sign you in!</div>

{/* label */}
<div className="desktextuser">
     <label className="images"><span className="desktext"> Email/Phone Number</span></label>
      </div> 

      
 <TextField id="outlined-basic" label="Please enter your email or phone number" variant="outlined"
 style={{ width:"400px",marginTop:"16px",marginLeft:'125px' }} />

 
 <Button variant="contained" color="primary" 
         style={{backgroundColor:"#2EB9AE",width:"400px",marginTop:"16px",height:"50px",marginLeft:'125px'}}>
         <span className="">Login with OTP</span><span className="rightarrow00"></span>
      </Button>

      <Button variant="contained" color="primary"
       style={{backgroundColor:"#2D5795",width:"400px",marginTop:"16px",height:"50px",marginLeft:'125px'}}>
         <span className="">Login with Password</span><span className="rightarrow00"></span>
      </Button>


{/* text with anchortag */}
<div className="deskregtext">
Don’t have an account? 
<span className="deskanch"> Register Now</span>
</div>

{/* <div className="redbox">
<label className="redtext">INCORRECT email</label> </div>
{/* <div className="dismiss">Dismiss </div> */}
{/* <div className="redpara">The email you have entered is incorrect. Please try again.. </div>
<div className="dismiss">Dismiss </div> */}
        </Grid>
      
      </Grid>
    </div> 
    </form>
  );
}