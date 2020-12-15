import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AdwyseHeading from '../components/AdwyseHeading';
import SVGImages from '../components/icons'


import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import '../assets/css/ButtonDemo.css';
import { FileUpload } from 'primereact/fileupload';

/* const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      margin: '14px',
      width: '340px',
      height:"50px"
    },
  },
})); */





export default class Awards_Recognitions  extends Component{
  constructor(props) {
    super(props);
    this.state = {Awards: '',Recognitions:'',image:'',file:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange3 = this.handleChange1.bind(this);
    this.fileInput = React.createRef();
  }

  handleChange(event) {
    this.setState({Awards: event.target.value});
   
  }
  handleChange1(event) {
    this.setState({Recognitions: event.target.value});
   
  }
  handleChange3(event) {
    this.setState({file: event.target.value});
   
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.Recognitions);
    event.preventDefault();
   /*  alert(
      `Selected file - ${
        this.fileInput.current.files[0].name
      }`, */

    
      this.setState({file: this.fileInput.current.files[0].name});

      alert('A name was submitted: ' + this.state.file);
  
    }
  /* const classes = useStyles(); */
  render() {
    const {Awards } = this.state;

    return (
      <div style={main}>
      <div>
      <AdwyseHeading/>
       <div className="p-field" style={{width:"340px",margin:"auto",marginTop:"-15px"}}>
       <div>
       <h3 style={{fontSize:"20px",marginTop:"12px"}}>Let's get started!</h3>
       </div> 
         <div>
         <img  src={SVGImages.AccountIcon} alt="" />
         </div>
         <form onSubmit={this.handleSubmit}>
            
         <label htmlFor="username1" className="p-d-block" style={label}>Awards</label>
        
         
         <InputText type="text"
                  value={this.state.Awards} onChange={this.handleChange} aria-describedby="username1-help" className="p-d-block" placeholder="Enter your award " style={inputbox}/>
     
         <div style={attachawards}> 
            <div style={{marginLeft:"68px",marginTop:"13px",color:"red"}}>  
            <FileUpload  type="file" ref={this.fileInput}    mode="basic" name="demo[]" chooseLabel="Attach your awards"  maxFileSize={1000000} />   
            </div>
          </div>
         
          <Button label="Add more awards" className="p-button-link" style={{width:"340px",marginLeft:"0px",marginTop:"-16px"}} />
         
         <label htmlFor="username1" className="p-d-block">Recognitions</label>
         <InputText      type="text"
                  value={this.state.Recognitions} onChange={this.handleChange1}                    aria-describedby="username1-help" className="p-d-block" placeholder="Enter your recognition" style={inputbox}/>
         <div style={attachawards}> 
         <div style={fileupload}>  
         <FileUpload  mode="basic" name="demo[]" chooseLabel="Attach your recognitions"  maxFileSize={1000000} />   
         </div>
       </div>
         <Button label="Add more recognition" className="p-button-link" style={{width:"340px",marginLeft:"0px",marginTop:"-16px",marginBottom:"12px"}} />
         <Button label="Confirm & continue" style={{width:"340px",height:"50px",background:"#2EB9AE"}} />
         </form>
         </div>
          <div style={{width:"120px",margin:"auto",marginTop:"30px"}}>
          <p style={{width:"87px",color:"#4A5058",font:"normal normal bold 18px/22px Lato"}}>Do it Later</p>
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

  const attachawards={
    width: "340px",
    height: "70px",
    border: "1px dashed #BFBFBF",
    bordeRadius: "6px",
    marginBottom:"26px",
    marginTop:"24px",
    opacity: "1"
    }

    const inputbox={
      width:"340px",height:"50px",margin:"auto",marginBottom:"26px",background:"#F2F2F2"
    }

    const label={
      marginLeft:"23px",marginTop:"-20px"
    }

    const fileupload={
      marginLeft:"68px",marginTop:"13px",color:"red"
    }