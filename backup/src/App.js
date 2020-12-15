
// import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Route,Switch } from "react-router-dom";
import personalDetails from './screen/personalDetails';
import PersonalDetailsStepTwo from './screen/PersonalDetailsStepTwo';
import Error from './components/Error';
import AllowNotification from './components/AllowNotification';
import CameraPermission from './components/CameraPermission';
import LocationPermission from './components/LocationPermission';
import AccountInformation from './screen/AccountInformation';
import Awards_Recognition from './screen/Awards_Recognition';

function App() {
  return (
    <Switch>
   
        <Route  exact path = "/" component={personalDetails}/>
        <Route  exact path = "/psteptwo" component={PersonalDetailsStepTwo}/>
        <Route  exact path = "/AccountInformation" component={AccountInformation}/>
        <Route  exact path = "/Awards_Recognition" component={Awards_Recognition}/>

        <Route  exact path = "/AllowNotification" component={AllowNotification}/>
        <Route  exact path = "/CameraPermission" component={CameraPermission}/>
        <Route  exact path = "/" component={LocationPermission}/>
        <Route component={Error}/>
   </Switch>
 );
}

export default App;
