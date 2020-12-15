import React, { Component } from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import Button from '@material-ui/core/Button';
import SVGImages from '../components/icons';
import AdwyseHeading from '../components/AdwyseHeading';

export default class LocationPermission extends Component {
  render() {
    return (
      <div style={main}>
       <div style={{marginLeft:"0px"}}>
       <AdwyseHeading/>
        </div>
        <div className="p-field"> 
        <div>
        <img  src={SVGImages.Illustration2} style={illustration} alt="" />
        </div>
        <div>
        <h3 style={stayupdated}>Location Permission!</h3>
        </div>
        <div>
        <p style={desc}>Allow this app to access your current location to connect with your patients with ease.</p>
        </div>
        <div style={{width:"340px",margin:"auto",marginTop:"100px"}}>
        <Button variant="contained" color="primary" style={{backgroundColor:"#2EB9AE",width:"340px",height:"50px",margin:"auto",marginBottom:"26px"}}>
        ALLOW Location Access
        </Button>
        </div>
        <div style={remindmelater}>
        <a>Remind me later</a>
       </div>
        </div>
        
      </div>
    )
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

  const illustration={
    width:"329px",
    height:"265px",
    opacity:"1",
    marginLeft:"42px",
    marginTop:"22px"
  }

  const stayupdated={
    margin:"auto",
    width:"184px",
    height:"24px",
    color:"#4A5058",
    textAlign:"center",
    font:"normal normal bold 20px/34px Lato"
  }

  const desc={
    width:"284px",
    height:"61px",
    margin:"auto",
    marginTop:"0px",
    marginBottom: "1rem",
    textAlign: "center",
    letterSpacing:"0px",
    color:"#4A5058",
    font: "normal normal 600 16px/21px Lato"
  }

  const remindmelater={
    width: "116px",
    height: "19px",
    textAlign:"center",
    margin:"auto",
    font:"normal normal bold 16px/19px Lato",
    letterSpacing:"0px",
    color:"#2D5795",
    opacity:"1",
    marginTop:"28px"
  }