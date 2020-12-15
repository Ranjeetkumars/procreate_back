import React, { Component } from 'react'
import SVGImages from '../components/icons'

export default class Splash extends Component {
  render() {
    return (
      <div>
      <form className="splash_main">
      <div className="gradient">
      </div>
      <div style={{marginLeft:"74px",marginTop:"-490px"}}>
      <img  src={SVGImages.WhiteLogo} alt="" />
      </div>
      </form>
      </div> 
    )
  }
}
