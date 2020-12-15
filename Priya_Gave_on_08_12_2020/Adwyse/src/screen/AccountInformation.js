import React,{Component} from 'react';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import Carousel from '../components/Carousel';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AdwyseHeading from '../components/AdwyseHeading';
import SVGImages from '../components/icons';

/* 
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      margin: '14px',
      width: '340px',
      height:"50px",
      marginLeft:"15px"
    },
  },
})); */

export default class AccountInformation extends Component {

  constructor(props) {
    super(props);
    this.state = {AccountholderName: '',AccountNumber:'',BankName:'',IFSCCode:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this); 
  
  }

  handleChange(event) {
    this.setState({AccountholderName: event.target.value});
   
  }
  handleChange1(event) {
    this.setState({AccountNumber: event.target.value});
   
  }
  handleChange2(event) {
    this.setState({BankName: event.target.value});
   
  }
  handleChange3(event) {
    this.setState({IFSCCode: event.target.value});
   
  } 
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.AccountholderName);
    event.preventDefault();
  }


  render() {

  return (
    <div style={main}>
    <div>
    <div style={{marginLeft:"17px"}}>
    <AdwyseHeading/>
    </div>
     <div className="p-field" style={{width:"340px",margin:"auto"}}> 
          <div>
          <h3 style={letGetStarted}>Let's get started!</h3>
          </div>
         <div>
         <img  src={SVGImages.AccountIcon} alt="" />
         </div>
         <form onSubmit={this.handleSubmit}>
                    <label htmlFor="AccountholderName" className="p-d-block" style={label}>Account holder Name</label>

         <InputText type="text"  value={this.state.AccountholderName} onChange={this.handleChange}    aria-describedby="username1-help" className="p-d-block" placeholder="Please enter account holder name" style={inputbox}/>
         <label htmlFor="username1" className="p-d-block">Account Number*</label>
         <InputText type="text"   value={this.state.AccountNumber} onChange={this.handleChange1}          aria-describedby="username1-help" className="p-d-block" placeholder="Please enter account number" style={inputbox}/>
         <label htmlFor="username1" className="p-d-block">Bank Name</label>
         <InputText type="text"  value={this.state.BankName} onChange={this.handleChange2} aria-describedby="username1-help" className="p-d-block" placeholder="Please enter bank name" style={inputbox}/>
         <label htmlFor="username1" className="p-d-block">IFSC Code</label>
         <InputText type="text"  value={this.state.IFSCCode} onChange={this.handleChange3} aria-describedby="username1-help" className="p-d-block" placeholder="Please enter IFSC Code" style={inputbox}/>
         <Button variant="contained" color="primary" style={button}>
         Confirm & Continue
         </Button>

         
         </form>
         <p style={{width:"87px",color:"#4A5058",font:"normal normal bold 18px/22px Lato",margin:"auto"}}>Do it Later</p>
         <div style={{marginTop:"-20px",marginLeft:"11px"}}>
         <Carousel/>
          </div>
         </div>
         



        
        </div>
        
    </div>
  );
}
}
const main={
    top: "0px",
    left: "0px",
    width: "50%",
    width: "414px",
    height: "896px",
    background: "#FFFFFF   0% 0% no-repeat padding-box",
    opacity: "1",
    margin:"auto"
    }

    const letGetStarted={
      fontSize:"20px",color:"#2D5795"
    }

    const label={
      marginLeft:"23px",marginTop:"-20px"
    }

    const inputbox={
      width:"340px",height:"50px",margin:"auto",marginBottom:"26px",background:"#F2F2F2"
    }

    const button={
      backgroundColor:"#2EB9AE",width:"340px",height:"50px",margin:"auto",marginBottom:"26px"
    }