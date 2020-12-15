
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
import StayConnected from './screen/StayConnected';
import PrivacyGuaranteed from './screen/PrivacyGuaranteed';
import EasyAppointments from './screen/EasyAppointments';
import UpFrontPayment from './screen/UpFrontPayment';
import GetStarted from './screen/GetStarted';

import RegistrationUnderReview from './screen/RegistrationUnderReview';
// import TermsConditions from './screen/Terms&Conditions';
import AboutUs from './screen/AboutUs';
import Settings from './screen/Settings';
import login from './screen/login';

import OngoingSwipup from './screen/OngoingSwipup';
import ProfilePreview from './screen/ProfilePreview';
import Specialization from './screen/Specialization';
import SpecializationConform from './screen/SpecializationConform';
import SpecializationSelected from './screen/SpecializationSelected';




function App() {
  return (
    <Switch>
   
   <Route  exact path = "/OngoingSwipup" component={OngoingSwipup}/>
   <Route  exact path = "/ProfilePreview" component={ProfilePreview}/>
   <Route  exact path = "/Specialization" component={Specialization}/>
   <Route  exact path = "/SpecializationConform" component={SpecializationConform}/>
   <Route  exact path = "/SpecializationSelected" component={SpecializationSelected}/>



   
   <Route  exact path = "/login" component={login}/>
        <Route  exact path = "/setting" component={Settings}/>
        <Route  exact path = "/" component={personalDetails}/>
        <Route  exact path = "/psteptwo" component={PersonalDetailsStepTwo}/>
        <Route  exact path = "/AccountInformation" component={AccountInformation}/>
        <Route  exact path = "/Awards_Recognition" component={Awards_Recognition}/>

        <Route  exact path = "/AllowNotification" component={AllowNotification}/>
        <Route  exact path = "/CameraPermission" component={CameraPermission}/>
        <Route  exact path = "/LocationPermission" component={LocationPermission}/>
        <Route  exact path = "/StayConnected" component={StayConnected}/>
        <Route  exact path = "/PrivacyGuaranteed" component={PrivacyGuaranteed}/>
        <Route  exact path = "/EasyAppointments" component={EasyAppointments}/>
        <Route  exact path = "/UpFrontPayment" component={UpFrontPayment}/>
        <Route  exact path = "/GetStarted" component={GetStarted}/>
        <Route  exact path = "/RegistrationUnderReview" component={RegistrationUnderReview}/>
        {/* <Route  exact path = "/TermsConditions" component={TermsConditions}/> */}
        <Route  exact path = "/AboutUs" component={AboutUs}/>


        <Route component={Error}/>
   </Switch>
 );
}

export default App;
