import React from 'react'
import '../assets/css/FAQs.css';
import { makeStyles } from '@material-ui/core/styles';
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
export default function FAQs() {
  const classes = useStyles();
        return (
            <div>
      <form className="card00">
     
 {/* arrow */}
 <div className="fqasarrow"></div> 
       <div className="faqsname">FAQ’s</div>

{/* label */}

<div className="helptext">How can we help you ?</div>
<div className="asktext">Ask a question or find answers to all the <br></br>frequently asked questions!</div>


      <TextField id="outlined-basic" label="Ask us any question" variant="outlined" style={{ width:"340px",marginTop:"16px" }}/>
  
       {/* <div className="successarrow"></div> */}

         <div className="tsuccess">
          <label />
          <button className="successarrow" type="submit">
          <div className="rightarrow"></div>
          </button>
        </div>

<div className="query">All Queries
         <hr></hr></div>

         <div className="pay">Payments</div>

<div className="appo">Appointments</div>

        <div className="video">Video Calling</div>
        <br></br>
           <div className="q1">
           What is Adwese and how is it helping<br></br> me connect  with my patients ?
          <div className="setplus"></div>
           </div> 
           <br></br>
           <hr></hr>
           <br></br>
           <div className="q2">
           Is all my information safe and encrypted  <br></br>in the app ?
           <div className="setplus"></div>
           </div> 
           <br></br>
           <hr></hr>
           <br></br>
           <div className="q3">
           Unable to view my appointments in <br></br> my profile
           <div className="setplus"></div>
           </div>
           <br></br>
           <hr></hr>
           <br></br>
          <div className="q4">
          Can I change my availability schedule <br></br> anytime ?
          <div className="setplus"></div>
           </div>
           <br></br>
           <hr></hr>
           <br></br>
            <div className="q5">
            Can I connect with my patients only with <br></br> my clinic number ?
            <div className="setplus"></div>
           </div>
           <br></br>
 <hr></hr>
 <br></br>  
      </form>
    </div>
        )
    }
