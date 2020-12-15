import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
//import SVGImages from './icons';
import Button from '@material-ui/core/Button';
//import { Button } from 'primereact/button';
//import { Link } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import SVGImages from '../components/icons';

import AdwyseHeading from '../components/AdwyseHeading';
class SignUp extends React.Component {
 // const [open, setOpen] = useState(false);

 constructor(props) {
  super(props);
    this.state={
      open:false
    }
  }
 
  

   onOpenModal=() => this.setState({open: true})

   demo = (props)=>{
    this.props.history.push('/personalDetails');
   }

   onCloseModal=() => this.setState({open: false})


    render(){
    return (
      <div style={{width:"414px",height:"896px",margin:"auto"}}>
      <div className="p-field" style={{width:"340px",margin:"auto"}}> 
       <AdwyseHeading/>
       <div className="p-d-flex p-flex-column" style={{alignItems:"center"}}>
       <p style={{width:"277px"}}>How would you like to get started ?</p>
      </div>

      <Button variant="contained" 
             color="primary" 
             type="submit"
             onClick={this.onOpenModal}
             style={{marginBottom:"24px",width:"340px",height:"220px",background:"transparent linear-gradient(237deg, #2FC6BA 0%, #209087 100%) 0% 0% no-repeat padding-box",borderRadius:"6px",opacity:"1"}} 
             >
             
             <div className="p-d-flex p-flex-column">
    <div className="p-mb-2">
    <img  src={SVGImages.Doctoricon} alt="" />
    </div>
    <div className="p-mb-2" style={{font:"normal normal bold 20px/30px Lato",color:"#FFFFFF"}}>Individual</div>
    <div style={{font:"italic normal normal 12px/15px Lato",color:"#FFFFFF",letterSpacing:"0px",opacity:"0.71"}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</div>
    <div className="p-mb-2" style={{font:"normal normal bold 16px/21px Lato",color:"#FFFFFF",letterSpacing:"0px",opacity:"1"}}>Let’s get started</div>


    </div>
     </Button>
     <Button variant="contained" 
             color="primary" 
             type="submit"
             style={{marginBottom:"16px",width:"340px",height:"220px",background:"transparent linear-gradient(239deg, #4782d8 0%, #2d599a 100%) 0% 0% no-repeat padding-box",borderRadius:"6px",opacity:"1"}} 
             >
             
             <div className="p-d-flex p-flex-column">
    <div className="p-mb-2">
    <img  src={SVGImages.OrganisationIcon} alt="" />
    </div>
    <div className="p-mb-2" style={{font:"normal normal bold 20px/30px Lato",color:"#FFFFFF"}}>Hospital/Organisation</div>
    <div style={{font:"italic normal normal 12px/15px Lato",color:"#FFFFFF",letterSpacing:"0px",opacity:"0.71"}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</div>
    <div className="p-mb-2" style={{font:"normal normal bold 16px/21px Lato",color:"#FFFFFF",letterSpacing:"0px",opacity:"1"}}>Let’s get started</div>
    
     
    </div>
     </Button>  
     <div className="p-d-flex p-jc-center" style={{width:"340px"}}>
     <div className="p-mr-2">Already have an account</div>
     <Link 
         component="button" 
         variant="body2" 
         >
        Sign In
      </Link>
      </div>
      </div>

      
     {/* Modal Box Start*/}
      <div className="p-mb-2">
      <Modal style={{width:"220px",height:"220px"}} open={this.state.open} onClose={this.onCloseModal} center>
      <div className="p-d-flex p-flex-column">
    <div className="p-mb-2" style={{width:"71px",margin:"auto",alignItems:"center"}}>
    <img src={SVGImages.Doctoricon} alt="" />
    </div>
    <div className="p-mb-2" style={{width:"306px",font:"normal normal bold 18px/25px Lato",letterSpacing:"0px",color:"#4A5058"}}>Hello Doctor, are you sure you want to start using the app as an individual?</div>
    <Button variant="contained" 
                type="submit" 
                onClick={this.demo}
                color="primary" 
                style={button}
               >
         Confirm & Continue
         </Button>
         
    </div>
    </Modal>
    </div>

{/* Modal Box end*/}

      </div>
    )
  }
   }



export default SignUp;

const button={
  backgroundColor:"#2EB9AE",
}