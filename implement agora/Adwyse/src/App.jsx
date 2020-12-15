import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import 'bulma/css/bulma.css'


import './App.css'
import AgoraHome from './agora/agoraPages/index/agoraHome'
import Meeting from './agora/agoraPages/meeting/Meeting'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="full">
          <Route exact path="/" component={AgoraHome} />
          <Route path="/meeting" component={Meeting} />
        </div>
      </Router>
    )
  }
}

export default App
