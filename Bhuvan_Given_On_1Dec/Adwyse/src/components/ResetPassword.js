
import React from 'react'

class ResetPassword extends React.Component{
  constructor(props){
    super(props)
    this.state={
      color:this.props.fromParent.color,
      resetSuccessful:this.props.fromParent.resetSuccessful,
      incorrectEmail:this.props.fromParent.incorrectEmail,
      otpResent:this.props.fromParent.otpResent,
      incorrectotp:this.props.fromParent.incorrectOtp  
    }
  }
  render(){
   return (  
     <div style={{background:this.state.color,
                 width:"414px",
                 height:"138px",
                 borderRadius: "0px 0px 8px 8px",
                 opacity: "1",
                 margin:"auto"}}  
                 >
     <div className="p-d-flex" style={{height: '150px'}}>
     <div className="p-mr-2 p-as-center"><p style={reset}>{this.state.otpResent.title}</p>
     <p style={reset2}>{this.state.otpResent.message}</p>
     </div>
     <div className="p-mr-2 p-as-center" style={dismiss}>Dismiss</div>   
      </div>
     </div>
   )
  }
}

export default ResetPassword;



const reset={
width:"151px",
height:"15px",
textAlign: "left",
font: "normal normal normal 12px/15px Lato",
letterSpacing: "1.2px",
color: "#FFFFFF",
textTransform: "uppercase",
opacity: "0.8"
}

const reset2={
width:"274px",
textAlign: "left",
font: "normal normal bold 16px/24px Lato",
letterSpacing: "0px",
color: "#FFFFFF",
opacity: "1"
}

const dismiss={
 letterSpacing:"1.4px",height:"17px",width:"54px",color:"#FFFFFF",textTransform:"uppercase",textAlign:"left",font:"normal normal normal 14px/17px Lato",
}