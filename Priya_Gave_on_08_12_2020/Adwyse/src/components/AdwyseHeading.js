import React, { Component } from 'react'
import SVGImages from '../components/icons';

export default class AdwyseHeading extends Component {
    render() {
        return (
            <div>       
            <div  style={{marginTop:"12px",width:"414px",width:"212px",margin:"auto",marginLeft:"68px"}}>
            <div style={{marginTop:"41px",marginLeft:"-5px"}}>
            <img style={{marginTop:"12px",marginLeft:"-70px"}} src={SVGImages.BackArrow} alt="" />
            </div>
            <img  src={SVGImages.Logo} alt="" />
            </div> 
            </div>
        )
    }
}