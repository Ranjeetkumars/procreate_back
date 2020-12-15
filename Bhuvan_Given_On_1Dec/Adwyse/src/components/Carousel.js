import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
        return (
            <div>
            <div style={indicatorsr}> </div>
            <div style={indicators1r}> </div>
            <div style={indicators2r}> </div>
            <div style={indicators3r}> </div> 
            </div>
        )
    }
}


const indicatorsr={
    marginTop: "23px",
    marginLeft: "126px",
width: "20px",
height: "8px",
/* background: var(--primary-blue) 0% 0% no-repeat padding-box; */
background: "#2D5795 0% 0% no-repeat padding-box",
borderRadius: "2px",
opacity: "1"
}

const indicators1r={
    marginTop: "-8px",
    marginLeft: "150px",
width: "10px",
height: "8px",
/* background: var(--primary-blue) 0% 0% no-repeat padding-box; */
background: "#C1C9D3 0% 0% no-repeat padding-box",
borderRadius: "2px",
opacity: "1"
}

const indicators2r={
    marginTop: "-8px",
    marginLeft: "165px",
width: "10px",
height: "8px",
/* background: var(--primary-blue) 0% 0% no-repeat padding-box; */
background: "#C1C9D3 0% 0% no-repeat padding-box",
borderRadius: "2px",
opacity: "1"
}

const indicators3r={
    marginTop: "-8px",
    marginLeft: "180px",
width: "10px",
height: "8px",
/* background: var(--primary-blue) 0% 0% no-repeat padding-box; */
background: "#C1C9D3 0% 0% no-repeat padding-box",
borderRadius: "2px",
opacity: "1"
}