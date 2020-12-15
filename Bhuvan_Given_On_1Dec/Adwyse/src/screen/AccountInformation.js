import React from 'react';
import {connect} from 'react-redux';
import { InputText } from 'primereact/inputtext';
import Button from '@material-ui/core/Button';
import AdwyseHeading from '../components/AdwyseHeading';
import Carousel from '../components/Carousel';
import SVGImages from '../components/icons';


 class AccountInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      accountholderName: '',
      accountNumber: '',
      bankName: '',
      ifscCode:'',
      error:'',
      backroute:"/Awards_Recognition"
      
    };
  }

  submitHandler = (e) => {
    const { accountholderName, accountNumber, bankName ,ifscCode} = this.state;
    e.preventDefault();
    if (!this.state.accountholderName || !this.state.accountNumber || !this.state.bankName
      ||!this.state.ifscCode) {
        this.setState(() => ({ error: 'Please Enter all the field!' }));
    } else {
     console.log(accountNumber);
        this.setState(() => ({ error: '' }));
        this.props.dispatch({
          type: 'ADD_ACCOUNT_INFORMATION',
          payload: { accountholderName, accountNumber, bankName, ifscCode }
        });
        // axiox.post().then((res) => {
        //   console.log(res);
        //   this.props.history.push("/accountInformation");
        // })
    }
  }


  componentDidMount() {
    const {accountInfo } = this.props;
   if(!accountInfo==''){
    this.setState({accountholderName:accountInfo.accountholderName,accountNumber:accountInfo.accountNumber,bankName:accountInfo.bankName,ifscCode:accountInfo.ifscCode})
  }
  }

  render(){
  return (
    <div style={main}>
    <form  onSubmit={this.submitHandler}>
    <div>
    <div style={{marginLeft:"17px"}}>
    <AdwyseHeading fromParaent={this.state.backroute} />
    </div>
     <div className="p-field" style={{width:"340px",margin:"auto"}}> 
          <div>
          <h3 style={letGetStarted}>Let's get started!</h3>
          </div>
         <div>
         <img  src={SVGImages.AccountIcon} alt="" />
         </div>
         <label htmlFor="username1" 
                className="p-d-block" 
                style={label}>Account holder Name
          </label>
         <InputText id="accountholderName" 
                    value={this.state.accountholderName}  
                    onChange={(e) => this.setState({accountholderName: e.target.value})} 
                    aria-describedby="username1-help" 
                    className="p-d-block" 
                    placeholder="Please enter account holder name" 
                    style={inputbox}/>
         <label htmlFor="username1" 
               className="p-d-block">
               Account Number*
          </label>
         <InputText id="accountNumber" 
                   value={this.state.accountNumber} 
                   onChange={(e) => this.setState({accountNumber: e.target.value})} 
                   aria-describedby="username1-help" 
                   className="p-d-block" 
                   placeholder="Please enter account number" 
                   style={inputbox}/>
         <label htmlFor="username1" 
                   className="p-d-block">
                   Bank Name</label>
         <InputText id="bankName" 
                    value={this.state.bankName}  
                    onChange={(e) => this.setState({bankName: e.target.value})}
                    aria-describedby="username1-help" 
                    className="p-d-block" 
                    placeholder="Please enter bank name" 
                    style={inputbox}/>
         <label htmlFor="bankName" 
                className="p-d-block">IFSC Code</label>
         <InputText id="ifscCode" 
                    value={this.state.ifscCode}  
                    onChange={(e) => this.setState({ifscCode: e.target.value})}
                    aria-describedby="username1-help" 
                    className="p-d-block" 
                    placeholder="Please enter IFSC Code" 
                    style={inputbox}/>
         <Button variant="contained" 
                type="submit" 
                color="primary" 
                style={button}>
         Confirm & Continue
         </Button>
         <p style={{width:"87px",color:"#4A5058",font:"normal normal bold 18px/22px Lato",margin:"auto"}}>Do it Later</p>
         <div style={{marginTop:"-20px",marginLeft:"11px"}}>
         <Carousel/>
          </div>
         </div>
         
        </div>
        </form>
    </div>
  );
}
}

const mapStateToProps = state => {
  return { accountInfo: state.accountInfo }
}

export default connect(mapStateToProps) (AccountInformation) 


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