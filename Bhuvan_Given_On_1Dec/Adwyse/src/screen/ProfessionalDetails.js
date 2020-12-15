import React, { Component } from 'react'
import AdwyseHeading from '../components/AdwyseHeading';
import { InputText } from 'primereact/inputtext';
import Button from '@material-ui/core/Button';
import SVGImages from '../components/icons';
import { FileUpload } from 'primereact/fileupload';
import { Dropdown } from 'primereact/dropdown';
import { connect } from 'react-redux';

 class ProfessionalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedSpecilaztion: null,
        selectedExperience:null,
        medicalRegistrationNo:"",
        qualification:"",
        specialisation:"",
        experience:"",
        error:"",
        backroute:"personalDetails"
    };

    this.cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

}
selectedSpecilaztionChange = (e) => {
  this.setState({ selectedSpecilaztion: e.target.value });
}

onselectedExperienceChange = (e) => {
  this.setState({ selectedExperience: e.value });
}


submitHandler = (e) => {
  e.preventDefault();
  const {selectedSpecilaztion,medicalRegistrationNo,qualification,selectedExperience}=this.state;

  if (!this.state.selectedSpecilaztion || !this.state.medicalRegistrationNo || !this.state.qualification
    ||!this.state.selectedExperience) {
      this.setState(() => ({ error: 'Please Enter all the field!' }));
  } else {
      const { dispatch,history } = this.props;
      this.setState(() => ({ error: '' }));
      dispatch({type:'ADD_PROFESSIONAL_DETAILS',
                payload:{selectedSpecilaztion,medicalRegistrationNo,qualification,selectedExperience}})
      history.push('/Awards_Recognition');

  }
}


componentDidMount() {
  const { professional } = this.props;
  if(!professional==''){
  this.setState({selectedSpecilaztion:professional.selectedSpecilaztion,qualification:professional.qualification,medicalRegistrationNo:professional.medicalRegistrationNo,selectedExperience:professional.selectedExperience})
 }
}

  render() {
    return (
      <div style={main}>
      <form  onSubmit={this.submitHandler}>
      <div>
      <AdwyseHeading fromParaent={this.state.backroute} />
      <div style={profile}>

      <div className="p-d-flex" 
          style={{color:"red",height: '150px'}}> 
      <div className="p-mr-2 p-as-center"> 
         <FileUpload  mode="basic" 
                      name="demo[]" 
                      chooseLabel=""  
                      maxFileSize={1000000} />  
         </div> 
      </div>
         
      </div> 
      <div>
      <label htmlFor="username1" 
           className="p-d-block" style={addProfilePicture}>Add Profile Picture</label>
      </div>
      </div>
      <div className="p-field" 
           style={{width:"340px"
           ,margin:"auto",
           marginTop:"22px"}}
      > 
      <div>
      <div>
      <img  src={SVGImages.Medical} alt="" />
      </div>
      <label htmlFor="username1" 
              className="p-d-block" 
              style={label}>Medical Registration Number*</label>
      <InputText id="username1"  
                 aria-describedby="username1-help" 
                 className="p-d-block" 
                 placeholder="Please enter the medical registration number" 
                 value={this.state.medicalRegistrationNo}
                 onChange={(e) => this.setState({medicalRegistrationNo: e.target.value})}
                 style={inputbox}/>
      </div>
      <div style={{marginTop:"-14px"}}>
      <p style={note}>Note : Your clinic number will only used if the patient wants to connect with you.
      </p>
      </div>
      <div>
      <div>
      <img  src={SVGImages.Qualification} alt="" />
      </div>
      <label htmlFor="username1" 
            className="p-d-block" 
            style={label}>
            Qualification
      </label>
      <InputText id="qualification" 
                 aria-describedby="username1-help" 
                 className="p-d-block" 
                 placeholder="Please enter your qualification" 
                 value={this.state.qualification}
                 onChange={(e) => this.setState({qualification: e.target.value})}
                 style={inputbox}
      />
      </div>
      </div>
      <div style={{width:"340px",margin:"auto",marginTop:"24px"}}>
      <div>
      <img  src={SVGImages.Specialisation} alt="" />
      </div>
      <div style={{marginTop:"-26px"}}>
      <label htmlFor="username1" 
            className="p-d-block" 
            style={label}>
            Specialisation
      </label>
      <Dropdown style={inputbox}  
                value={this.state.selectedSpecilaztion} 
                options={this.cities} 
                onChange={this.selectedSpecilaztionChange} 
                optionLabel="name" 
                placeholder="Select your specialisation" />
      </div>
      </div>
      <div style={{width:"340px",margin:"auto",marginTop:"24px"}}>
      <div>
      <img  src={SVGImages.Experience} alt="" />
      </div>
      <div style={{marginTop:"-26px"}}>
      <label htmlFor="username1" 
            className="p-d-block" 
            style={label}>Experience
      </label>
      <Dropdown style={inputbox} 
                value={this.state.selectedExperience} 
                options={this.cities} 
                onChange={this.onselectedExperienceChange} 
                optionLabel="name" 
                placeholder="Number of years of experience" />
      </div>
      <Button variant="contained" 
             color="primary" 
             type="submit" 
             style={button}>
             
     Confirm & Continue
     </Button>
      </div>
      </form>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return { professional: state.professional }
}

export default  connect(mapStateToProps)(ProfessionalDetails)

const profile={
  width: "120px",
  height: "120px",
  background: "#F2F2F2 0% 0% no-repeat padding-box",
  opacity: "1",
  margin:"auto",
  borderRadius:"50%"
}

const addProfilePicture={
  width:"134px",height:"19px",margin:"auto",font:"normal normal bold 16px/19px Lato"
}

const main={
  top: "0px",
  left: "0px",
  width: "50%",
  width: "414px",
  height: "1134px",
  background: "#FFFFFF   0% 0% no-repeat padding-box",
  opacity: "1",
  margin:"auto"
  }

  
const note={
  marginLeft:"0px",width:"329px",marginTop:"0px",height:"38px",color:"#4A5058",margin:"auto",
  textAlign: "initial",
  font: "italic normal normal 16px/17px Lato",
  letterSpacing: "0px",
  opacity: "1",
  marginTop:"-15px",
  marginBottom:"8px"
}

const inputbox={
  width:"340px",height:"50px",margin:"auto",marginBottom:"26px",background:"#F2F2F2"
}

const label={
  marginLeft:"23px",marginTop:"-22px"
}

const button={
  backgroundColor:"#2EB9AE",width:"340px",height:"50px",margin:"auto",marginTop:"24px"
}