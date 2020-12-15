import React from 'react'
import '../assets/css/login.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      margin: '14px',
      width: '340px',
      height:"50px"
    },
  },
}));

export default function Login() {
  const classes = useStyles();

        return (
            <div>
      <form className="card10">

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

           
      <TextField id="outlined-basic" label="Please enter your email or phone number" variant="outlined"style={{ width:"340px",marginTop:"16px" }} />
           {/* <br></br>
           <br></br>
   <span className="p-float-label">
                    <InputText id="username" value={this.state.value2} onChange={(e) => this.setState({value2: e.target.value})} />
                    <label htmlFor="username">Please enter your email or phone number</label>
                </span> */}
         
         <Button variant="contained" color="primary" style={{backgroundColor:"#2EB9AE",width:"340px",marginTop:"16px",height:"50px"}}>
         <span className="">Login with OTP</span><span className="rightarrow00"></span>
      </Button>

      <Button variant="contained" color="primary" style={{backgroundColor:"#2D5795",width:"340px",marginTop:"16px",height:"50px"}}>
         <span className="">Login with Password</span><span className="rightarrow00"></span>
      </Button>



{/* text with anchortag */}
<div className="regtext00">
Don’t have an account? 
<span className="anch00">Register Now</span>
</div>

{/* image */}
        <div>
          <label />
          <div 
      
      className="backgroungimg00" >
       </div>
        </div>
      
       
      </form>
    </div>
        )
    }

