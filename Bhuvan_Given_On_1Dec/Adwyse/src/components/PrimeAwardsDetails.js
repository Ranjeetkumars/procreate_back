import React, { Component } from 'react'

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import '../assets/css/ButtonDemo.css';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import SVGImages from './icons'

export default class PrimeAwardsDetails extends Component {
  render() {
    return (
      <div style={{width:"414px"}}>
      <div style={{marginLeft:"0px"}}>
      <div style={attachawards}>     
            <FileUpload mode="basic" name="demo[]" chooseLabel="Attach your awards"  maxFileSize={1000000} style={{marginLeft:"71px",marginTop:"12px"}}/>
          
      </div>
      </div>
      </div>

    )
  }
}

const inputboxAwards={   
marginLeft: "-9px",
marginRight: '-9px',
width: '340px',
fontSize:"15px",
height: '50px',
background: '#F2F2F2 0% 0% no-repeat padding-box',
borderRadius: '6px',
opacity: '1'
}

const attachawards={
width: "340px",
height: "70px",
border: "1px dashed #BFBFBF",
bordeRadius: "6px",
marginLeft:"-10px",
marginBottom:"24px",
marginTop:"24px",
opacity: "1"
}

const addmoreawards={
  marginBottom:"24px",
  marginTop:"7px",
width: "214px",
height: "19px",
marginLeft: "90px",
marginRight: "117px",
textAlign:"left",
font: "normal normal bold 16px/19px Lato",
letterSpacing: "0px",
color: "#B3BCC7",
opacity: "1"  
}