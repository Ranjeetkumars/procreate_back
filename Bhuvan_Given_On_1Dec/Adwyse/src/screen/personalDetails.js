import React, { Component } from 'react'
import AdwyseHeading from '../components/AdwyseHeading';
import { InputText } from 'primereact/inputtext';
import {Checkbox} from 'primereact/checkbox';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import SVGImages from '../components/icons';
import Link from '@material-ui/core/Link';
 class PersonalDetails extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
        checked: false,
        cities: [],
            title:'',
            author: '',
            firstname: '',
            lastname:'',
            phonenumber: '',
            clinicnumber:'',
            emailaddress:'',
            gender:'',
            dateofbirth: '',
            addressline1:'',
            addressline2:'',
            townCity:'',
            stateRegion:'',
            termAndCondition:false,

            errfirstname:'',
            errlastname:'',
            errphonenumber: '',
            errclinicnumber:'',
            errgender:'',
            errdateofbirth: '',
            backroute:"/"
    };

}

onCityChange =(e) => {
  let selectedCities = [...this.state.cities];

  if (e.checked)
      selectedCities.push(e.value);
  else
      selectedCities.splice(selectedCities.indexOf(e.value), 1);
  this.setState({ cities: selectedCities });
}

 validation =() =>{
   
  if(!this.state.firstname){
    this.setState(()=>({errfirstname:"Please Enter Firstname"}))
  }else{
   this.setState(() => ({ errfirstname: '' }));
  }
  if(!this.state.lastname){
    this.setState(()=>({errlastname:"Please Enter Last Name"}))
  }else{
    this.setState(() => ({ errlastname: '' }));
  }  
  if(!this.state.phonenumber){
    this.setState(()=>({errphonenumber:"Please Enter phonenumber"}))
  }else{
   this.setState(() => ({ errphonenumber: '' }));
  }
  if(!this.state.clinicnumber){
    this.setState(()=>({errclinicnumber:"Please Enter clinicnumber"}))
  }else{
    this.setState(() => ({ errclinicnumber: '' }));
  }
  if(!this.state.gender){
    this.setState(()=>({errgender:"Please Enter Gender"}))
  }else{
   this.setState(() => ({ errgender: '' }));
  }
  if(!this.state.dateofbirth){
    this.setState(()=>({errdateofbirth:"Please Enter clinicnumber"}))
  }else{
    this.setState(() => ({ errdateofbirth: '' }));
  }

 
 }

 
 submitHandler = (e) => {
  const {history} = this.props;
  this.validation();
  e.preventDefault();
  const {firstname,lastname,phonenumber,clinicnumber,emailaddress,gender,dateofbirth,addressline1,addressline2,townCity,stateRegion}=this.state;
 
  if (!this.state.firstname || !this.state.lastname || !this.state.phonenumber
    ||!this.state.clinicnumber || !this.state.emailaddress || !this.state.dateofbirth
    ) {
      this.setState(() => ({ errors: 'Please Enter all the field!' }));
  } else {
    const { dispatch } = this.props;
      this.setState(() => ({ errors: '' }));


      dispatch({type:'ADD_PERSONAL_DETAILS',
      payload:{firstname,lastname,phonenumber,clinicnumber,emailaddress,gender,dateofbirth,addressline1,addressline2,townCity,stateRegion}})
      history.push('/ProfessionalDetails');
  }
};


componentDidMount() {
  const { prsnDetails } = this.props;
 if(!prsnDetails==''){
 this.setState({firstname:prsnDetails.firstname,lastname:prsnDetails.lastname,phonenumber:prsnDetails.phonenumber,clinicnumber:prsnDetails.clinicnumber,emailaddress:prsnDetails.emailaddress,gender:prsnDetails.gender,dateofbirth:prsnDetails.dateofbirth,addressline1:prsnDetails.addressline1,addressline2:prsnDetails.addressline2,townCity:prsnDetails.townCity,stateRegion:prsnDetails.stateRegion})
}
  
}

  render() {
    return (
      <div style={main}>
      <form  onSubmit={this.submitHandler}>
     
      <AdwyseHeading fromParaent={this.state.backroute}/> 
      <div className="p-field" style={{width:"340px",margin:"auto"}}> 
      <h3 style={{fontSize:"20px"}}>Let’s sign you up!</h3>
     <p style={description}>We need some details about you Doctor, so you can get start advising!</p>
     <div>
     <div>
     <img  src={SVGImages.AccountIcon} alt="" />
     </div>
     <label htmlFor="username1" 
            className="p-d-block" 
            style={{marginLeft:"23px"
                   ,marginTop:"-22px"}}>
            First Name
      </label>
     <InputText id="firstname" 
                aria-describedby="username1-help" 
                className="p-d-block" 
                placeholder="Please enter your first name" 
                value={this.state.firstname}
                onChange={(e) => this.setState({firstname: e.target.value})}
                style={inputbox}
              
      />
           <small id="username2-help" style={small} className="p-invalid p-d-block">{this.state.errfirstname}</small>
     </div>
     <div>
     <div>
     <img  src={SVGImages.AccountIcon} alt="" />
     </div>
     <label htmlFor="lastname"
           className="p-d-block" 
           style={{marginLeft:"23px"
                   ,marginTop:"-22px"}}>
                Last Name
     </label>
     <InputText id="lastname" 
                aria-describedby="username1-help" 
                className="p-d-block" 
                placeholder="Please enter your last name" 
                value={this.state.lastname}
                onChange={(e) => this.setState({lastname: e.target.value})}
                style={inputbox}/>
                <small id="username2-help" style={small} className="p-invalid p-d-block">{this.state.errlastname}</small>
                </div>
     <div className="p-fluid p-formgrid p-grid">
     <div className="p-field p-col-12 p-md-6">
     <div>
     <img src={SVGImages.PhoneIcon} alt="" />
     </div>
     <div style={{marginTop:"-26px"}}>
     <label htmlFor="firstname6"
           style={{marginLeft:"24px"}}>
           Phone Number
    </label>
    <InputText id="phonenumber" 
               type="number" 
               placeholder="Enter number" 
               value={this.state.phonenumber}
               onChange={(e) => this.setState({phonenumber: e.target.value})}
               style={{height:"50px",
                      background:"#F2F2F2"}} 
     />
     <small id="username2-help" style={small} className="p-invalid p-d-block">{this.state.errphonenumber}</small>
    </div>
    </div>
     <div className="p-field p-col-12 p-md-6">
     <div>
     <img src={SVGImages.PhoneIcon} alt="" />
     </div>
     <div style={{marginTop:"-26px"}}>
     <label htmlFor="clinicnumber" 
           style={{marginLeft:"24px"}}>
           Clinic Number
    </label>
    <InputText id="clinicnumber"
              placeholder="Alternate number" 
              type="number" 
              value={this.state.clinicnumber}
              onChange={(e) => this.setState({clinicnumber: e.target.value})}
              style={{height:"50px",
                    background:"#F2F2F2"}}
     />
     <small id="username2-help" style={small} className="p-invalid p-d-block">{this.state.errclinicnumber}</small>
    </div>
</div>
</div>
<div>
<p style={note}>Note : Your clinic number will only used if the patient wants to connect with you.
</p>
</div>
<div>
     <div>
     <img  src={SVGImages.Email} alt="" />
     </div>
     <label htmlFor="emailaddress"
            className="p-d-block" 
            style={{marginLeft:"23px",
                    marginTop:"-22px"}}>
                    Email Address
     </label>
     <InputText id="emailaddress" 
                aria-describedby="username1-help" 
                className="p-d-block" 
                placeholder="Enter Email" 
                value={this.state.emailaddress}
                onChange={(e) => this.setState({emailaddress: e.target.value})}
                style={{width:"340px",height:"50px",margin:"auto",marginBottom:"26px",background:"#F2F2F2"}}/>
                <small id="username2-help" className="p-invalid p-d-block"></small>
     </div>
     <div className="p-fluid p-formgrid p-grid">
     <div className="p-field p-col-12 p-md-6">
     <div>
     <img src={SVGImages.Gender} alt="" />
     </div>
     <div style={{marginTop:"-26px"}}>
    <label htmlFor="gender" 
          style={{marginLeft:"24px"}}>
          Gender
    </label>
    <InputText id="gender" 
               type="text" 
               placeholder="Select Gender" 
               style={{height:"50px",background:"#F2F2F2"}}
               value={this.state.gender}
               onChange={(e) => this.setState({gender: e.target.value})}
     />
     <small id="username2-help" style={small} className="p-invalid p-d-block">{this.state.errgender}</small>
    </div>
    </div>
     <div className="p-field p-col-12 p-md-6">
     <div>
     <img src={SVGImages.CalendarIcon} alt="" />
     </div>
     <div style={{marginTop:"-26px"}}>
    <label htmlFor="dateofbirth" 
           style={{marginLeft:"24px"}}>
           Date Of Birth
    </label>
    <InputText id="dateofbirth" 
               placeholder="Enter Date Of Birth" 
               type="text" 
               style={{height:"50px",background:"#F2F2F2"}}
               value={this.state.dateofbirth}
               onChange={(e) => this.setState({dateofbirth: e.target.value})}
     />
     <small id="username2-help" style={small} className="p-invalid p-d-block">{this.state.errdateofbirth}</small>
    </div>
    </div>
    </div>
    <div>
     <div>
     <img  src={SVGImages.Address} alt="" />
     </div>
     <label htmlFor="addressline1" 
            className="p-d-block" 
            style={{marginLeft:"23px",marginTop:"-22px"}}>
            Address Line 1
      </label>
     <InputText id="addressline1" 
                aria-describedby="username1-help" 
                className="p-d-block" 
                placeholder="Please Enter Address Line 1 " 
                style={inputbox}
                value={this.state.addressline1}
                onChange={(e) => this.setState({addressline1: e.target.value})}
      />
      <small id="username2-help" style={small} className="p-invalid p-d-block"></small>
     </div>
     <div>
     <div>
     <img  src={SVGImages.Address} alt="" />
     </div>
     <label htmlFor="addressline2" 
            className="p-d-block" 
            style={{marginLeft:"23px",marginTop:"-22px"}}>
            Address Line 2
      </label>
     <InputText id="username1" 
                aria-describedby="username1-help" 
                className="p-d-block" 
                placeholder="Please Enter Address Line 2" 
                style={inputbox}
                value={this.state.addressline2}
                onChange={(e) => this.setState({addressline2: e.target.value})}
      />
      <small id="username2-help" style={small} className="p-invalid p-d-block"></small>
     </div>
     <div className="p-fluid p-formgrid p-grid">
     <div className="p-field p-col-12 p-md-6">
          <div>
          <img src={SVGImages.Address} alt="" />
          </div>
          <div style={{marginTop:"-26px"}}>
         <label htmlFor="townCity" 
                style={{marginLeft:"24px"}}>
                Town/City
          </label>
         <InputText id="townCity" 
                    type="text" 
                    placeholder="Enter Town/City" 
                    style={{height:"50px",background:"#F2F2F2"}}
                    value={this.state.townCity}
                    onChange={(e) => this.setState({townCity: e.target.value})}
           />
           <small id="username2-help" style={small} className="p-invalid p-d-block"></small>
         </div>
     </div>
     <div className="p-field p-col-12 p-md-6">
          <div>
          <img src={SVGImages.Address} alt="" />
          </div>
          <div style={{marginTop:"-26px"}}>
         <label htmlFor="stateRegion" 
                style={{marginLeft:"24px"}}>
                State/Region
          </label>
         <InputText id="stateRegion" 
                    placeholder="Enter State/Region" 
                    type="text" 
                    style={{height:"50px",background:"#F2F2F2"}}
                    value={this.state.stateRegion}
                    onChange={(e) => this.setState({stateRegion: e.target.value})}
           />
           <small id="username2-help" style={small} className="p-invalid p-d-block"></small>
         </div>
         </div>
         </div>
         <div>
         <div className="p-field-checkbox">
                        <Checkbox inputId="city2" name="city" value="Los Angeles" onChange={this.onCityChange} checked={this.state.cities.indexOf('Los Angeles') !== -1} />
                        <label htmlFor="city2">I agree to all the </label>             
        </div>
        
        <div>
        <Link 
        component="button" 
         variant="body2" 
         style={{marginLeft:"154px",marginTop:"-76px",width:"146px",font:"normal normal bold 16px/19px Lato"}}>
         Terms & Conditions
      </Link>
      </div>
      </div>
     <Button variant="contained" color="primary" type="submit"  style={{backgroundColor:"#2EB9AE",width:"340px",height:"50px",margin:"auto",marginBottom:"26px"}}>
     Confirm & Continue
     </Button>
     </div>
      </form>    
    </div>
  );
}
}

const mapStateToProps = state => {
  return { prsnDetails: state.prsnDetails }
}

export default connect(mapStateToProps)(PersonalDetails)




const description={
  marginLeft:"0px",width:"288px",marginTop:"0px",height:"40px",color:"#4A5058",margin:"auto",
  textAlign: "center",
  font: "italic normal normal 16px/17px Lato",
  letterSpacing: "0px",
  opacity: "1"
}

const note={
  marginLeft:"0px",width:"303px",marginTop:"0px",height:"38px",color:"#4A5058",margin:"auto",
  textAlign: "initial",
  font: "italic normal normal 16px/17px Lato",
  letterSpacing: "0px",
  opacity: "1",
  marginBottom:"16px"
}

const main={
  top: "0px",
  left: "0px",
  width: "50%",
  width: "414px",
  height: "1681px",
  background: "#FFFFFF   0% 0% no-repeat padding-box",
  opacity: "1",
  margin:"auto"
  }

  const inputbox={
    width:"340px",height:"50px",margin:"auto",background:"#F2F2F2"
    
      }

      const small={
        marginBottom:"12px"
      }