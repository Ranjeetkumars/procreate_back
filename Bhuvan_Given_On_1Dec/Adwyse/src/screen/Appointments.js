import React, { Component } from 'react'

export default class Appointments extends Component {
  render() {
    return (
      <div>
      <div className="p-d-flex" style={{height: '150px'}}>
      <div className="p-mr-2 p-as-start">Start</div>
      <div className="p-mr-2 p-as-center">Center</div>
      <div className="p-mr-2 p-as-end">End</div>
      <div className="p-mr-2 p-as-stretch">Stretch</div>
  </div>
      </div>
    )
  }
}
