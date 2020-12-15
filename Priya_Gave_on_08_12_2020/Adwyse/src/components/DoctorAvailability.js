import React, { Component } from 'react'
import AdwyseHeading from './AdwyseHeading';
import Carousel from './Carousel';
import SVGImages from './icons';


export default class DoctorAvailability extends Component {
    render() {
        return (
            <div style={main}>
            <form className="form" style={{marginLeft:"54px"}}>
            <AdwyseHeading/>
            <div>
            <h3 style={step}>Step 6 • Availability</h3>
            </div>
            <div>
            <p  style={description}>Please let us know your availability so you can plan your appointment & schedule.</p>
            </div>
            <div>
            <h3 style={setWorkSchedule}>Set Work Schedule</h3>
            </div>
            <div>
            <label style={selectWorkingDays} htmlFor="workingdays">Please select your working days</label>
            <div className="labelfeeIcon" style={selectWorkingDayIcon}></div>
            </div>
            <div style={{marginLeft:"-4px"}}>
            <div style={monday}> 
            <div style={{marginTop:"5px"}}>
            <span style={spammonday}>Monday</span>
            <span style={spamicon}></span>
            </div>
            </div>
            <div style={tuesday}> 
            <div style={{marginTop:"5px"}}>
            <span style={spammonday}>Monday</span>
            <span style={spamicon}></span>
            </div>
            </div>
            <div style={wednesday}> 
            <div style={{marginTop:"5px"}}>
            <span style={spammonday}>Wednesday</span>
            <span style={spamicon}></span>
            </div>
            </div>
            </div> 
            <div style={{marginLeft:"-4px",marginTop:"-25px"}}>
            <div style={monday}> 
            <div style={{marginTop:"5px"}}>
            <span style={spammonday}>Thursday</span>
            <span style={spamicon}></span>
            </div>
            </div>
            <div style={friday}> 
            <div style={{marginTop:"5px"}}>
            <span style={spammonday}>Friday</span>
            <span style={spamicon}></span>
            </div>
            </div>
            <div style={saturday}> 
            <div style={{marginTop:"5px"}}>
            <span style={spammonday}>Saturday</span>
            <span style={spamicon}></span>
            </div>
            </div>
            </div>    

            <div style={{marginLeft:"-22px",marginTop:"-8px"}}>
            <div style={sunday}> 
            <div style={{marginTop:"5px"}}>
            <span style={spammonday}>Sunday</span>
            <span style={spamicon}></span>
            </div>
            </div>
            </div>    
            <div>
            <label style={includeHoliday} htmlFor="workingdays">Include holidays</label>
            </div>
            <div style={{marginTop:"-43px"}}>
            <label style={selectWorkTiming} htmlFor="workingdays">Select work timings</label>
            <div className="labelfeeIcon" style={workTimingIcon}></div>
            </div>
            <div style={{marginLeft:"-3px"}}>
            <div style={{marginLeft:"10px"}}>
            <label style={selectWorkTiming} htmlFor="workingdays">Start Time</label>
            <div style={startTime}>
            <div style={{marginTop:"10px",marginLeft:"18px"}}>
            <span style={spammonday}>08:00 AM</span>
            </div>
            </div>
            </div>
            <div style={{marginLeft:"198px",marginTop:"-120px"}}>
            <label style={selectWorkTiming} htmlFor="workingdays">End Time</label>
            <div style={startTime}>
            <div style={{marginTop:"10px",marginLeft:"18px"}}>
            <span style={spammonday}>12:00 PM</span>
            </div>
            </div>
            </div>
            </div>
            <div>
          <label />
          <button style={addmoreslot} type="submit">
          <img style={{marginTop:"-13px",marginLeft:"-430px"}} src={SVGImages.PlusIcon} alt="" />
          <span style={addmoreText}>Add more time slots</span>
          <div className="rightArrowIcon"></div>
          </button>
          </div> 
            <div>
          <label />
          <button style={sucessbtn} type="submit">
          <span style={logintext}>Confirm & Continue</span>
          <div className="rightArrowIcon"></div>
          </button>
          </div> 
         <div style={{marginTop:"15px",marginLeft:"5px"}}>
          <Carousel/>
          </div>
            </form>
            </div>
            
        )
    }
}

const main={
  background:"#FAFAFA",marginLeft:"-4px",width:"435px",height:"946px",margin:"auto",marginTop:"17px",
}

const spamicon={
    width: "22px",
height: "22px",
background: "#E5E5E5 0% 0% no-repeat padding-box",
opacity: "1"
}

const spammonday={
    width: "48px",
height: "13px",
textAlign: "left",
font: "normal normal bold 13px/16px Lato",
letterSpacing: "0px",
color: "#1E1F20",
marginLeft:"26px",
marginTop:"-4px",
opacity: "1"
}

const monday={
    width: "115px",
height: "38px",
marginLeft:"-9px",
marginTop:"35px",
background: "#F2F2F2 0% 0% no-repeat padding-box",
borderRadius: "6px",
opacity: "1"
}

const tuesday={
  width: "115px",
height: "38px",
marginLeft:"112px",
marginTop:"-38px",
background: "#F2F2F2 0% 0% no-repeat padding-box",
borderRadius: "6px",
opacity: "1"
}

const wednesday={
  width: "115px",
height: "38px",
marginLeft:"233px",
marginTop:"-38px",
background: "#F2F2F2 0% 0% no-repeat padding-box",
borderRadius: "6px",
opacity: "1"
}

const friday={
  width: "115px",
height: "38px",
marginLeft:"112px",
marginTop:"-38px",
background: "#F2F2F2 0% 0% no-repeat padding-box",
borderRadius: "6px",
opacity: "1"
}

const saturday={
  width: "115px",
height: "38px",
marginLeft:"233px",
marginTop:"-38px",
background: "#F2F2F2 0% 0% no-repeat padding-box",
borderRadius: "6px",
opacity: "1"
}

const sunday={
  width: "115px",
height: "38px",
marginLeft:"129px",
marginTop:"25px",
background: "#F2F2F2 0% 0% no-repeat padding-box",
borderRadius: "6px",
opacity: "1"
}

const startTime={
width: "150px",
height: "50px",
marginLeft:"-11px",
marginTop:"-8px",
background: "#FFFFFF 0% 0% no-repeat padding-box",
border:"1px solid #F0F0F0",
borderRadius: "8px",
opacity: "1"
}

const selectWorkingDayIcon={
    marginLeft:"208px",
    marginTop:"-32px"
}


const workTimingIcon={
    marginLeft:"127px",
    marginTop:"-32px"
}

const selectWorkingDays={
    width: "223px",
height: "19px",
textAlign: "left",
font: "normal normal 600 16px/19px Lato",
letterSpacing: "0px",
color: "#4A5058",
opacity: "1"
}

const description={
    marginLeft:"-12px",width:"340px",marginTop:"0px",height:"20px",color:"#4A5058",
    textAlign: "center",
    font: "italic normal normal 16px/17px Lato",
    letterSpacing: "0px",
    opacity: "1"
  }

const step={
    marginLeft:"77px",height:"53px",width:"300px",color:"#2EB9AE",fontSize:"17px",marginBottom:"21px"
  }

  const setWorkSchedule={
    marginLeft:"-10px",height:"53px",width:"300px",color:"#2EB9AE",fontSize:"17px",marginTop:"43px" ,
    textAlign: "left",
font: "normal normal bold 18px/22px Lato",
width: "152px",
height: "22px",
letterSpacing: "0px",
color: "#2D5795",
opacity: "1"
  }

  const includeHoliday={
    width: "115px",
    height: "18px",
    textAlign: "left",
    marginTop:"43px",
    font: "normal normal bold 16px/24px Lato",
    letterSpacing: "0px",
    color: "#1E1F20",
    opacity: "1"
  }

  const selectWorkTiming={
    width: "140px",
    height: "19px",
    textAlign: "left",
    marginTop:"43px",
    font: "normal normal bold 16px/17px Lato",
    letterSpacing: "0px",
    color: "#4A5058",
    opacity: "1"
  }

  const sucessbtn={
    marginTop: "20px",
    marginLeft: "-6px",
  width: "340px",
  height: "50px",
  background: "#2EB9AE 0% 0% no-repeat padding-box",
  borderRadius: "6px",
  opacity: "1"
  }

  const addmoreslot={
    marginTop: "20px",
    marginLeft: "-6px",
    border:"1px solid #E0E0E0",
  width: "340px",
  height: "50px",
  borderRadius: "6px",
  opacity: "1"
  }

  const logintext={
    top: "381px",
    float: "left",
  marginTop: "-3px",
  marginLeft: "-33px",
  width: "231px",
  height: "22px",
  /* text-align: left; */
  font: "normal normal bold 18px/22px Lato",
  letterSpacing: "0px",
  color: "#FFFFFF",
  opacity: "1"
  }

  const addmoreText={
    top: "381px",
    float: "left",
  marginTop: "-3px",
  marginLeft: "44px",
  width: "231px",
  height: "22px",
   textAlign: "center",
  font: "normal normal bold 15px/18px Lato",
  letterSpacing: "0px",
  color: "#2C1C13",
  opacity: "1"
  }