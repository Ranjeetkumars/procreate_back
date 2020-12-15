

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Route,Switch } from "react-router-dom";
import personalDetails from './personalDetails';
import ProfessionalDetails from './ProfessionalDetails';
import Error from '../components/Error';
import AccountInformation from './AccountInformation';
import Awards_Recognition from './Awards_Recognition';
import StayConnected from './StayConnected';
import PrivacyGuaranteed from './PrivacyGuaranteed';
import EasyAppointments from './EasyAppointments';
import UpFrontPayment from './UpFrontPayment';
import GetStarted from './GetStarted';
import Signup from './SignUp';
import RegistrationUnderReview from './RegistrationUnderReview';
 import TermsConditions from './Terms&Conditions';
import AboutUs from './AboutUs';

import OngoingSwipup from './OngoingSwipup';
import ProfilePreview from './ProfilePreview';
import Specialization from './Specialization';
import SpecializationConform from './SpecializationConform';
import SpecializationSelected from './SpecializationSelected';
import AdwyseLogin from './AdwyseLogin';
import Splash from './Splash';
import LoginOtpVerification from './LoginOtpVerification';

import AllowNotification from '../components/AllowNotification';
import LocationPermission from '../components/LocationPermission';
import CameraPermission from '../components/CameraPermission';

import Settings from './Settings';
import FAQs from './FAQs';
import Deletemsg from './Deletemsg';
import SpecializationModal from './Specialization2';
import Appointments from './Appointments';
import Login from '../components/Login'

import DesktopLogin from '../components/DesktopLogin';



function AppRoute() {
  return (
    <Switch>
    
        <Route exact path="/Login" component={Login} />
        <Route exact path="/" component={Signup} />
        <Route  exact path = "/personalDetails" component={personalDetails}/>
        <Route  exact path = "/ProfessionalDetails" component={ProfessionalDetails}/>
        <Route  exact path = "/Awards_Recognition" component={Awards_Recognition}/>
        <Route  exact path = "/AccountInformation" component={AccountInformation}/>
       
        <Route  exact path = "/Splash" component={Splash}/>
        <Route  exact path = "/AllowNotification" component={AllowNotification}/>
        <Route  exact path = "/LocationPermission" component={LocationPermission}/>
        <Route  exact path = "/CameraPermission" component={CameraPermission}/>
   
	      <Route  exact path = "/AdwyseLogin" component={AdwyseLogin}/>
        <Route  exact path = "/LoginOtpVerification" component={LoginOtpVerification}/>
        <Route  exact path = "/Appointments" component={Appointments}/>
        <Route  exact path = "/setting" component={Settings}/>
        <Route  exact path = "/StayConnected" component={StayConnected}/>
        <Route  exact path = "/PrivacyGuaranteed" component={PrivacyGuaranteed}/>
        <Route  exact path = "/EasyAppointments" component={EasyAppointments}/>
        <Route  exact path = "/UpFrontPayment" component={UpFrontPayment}/>
        <Route  exact path = "/GetStarted" component={GetStarted}/>
        <Route  exact path = "/RegistrationUnderReview" component={RegistrationUnderReview}/>
        <Route  exact path = "/TermsConditions" component={TermsConditions}/> 
        <Route  exact path = "/AboutUs" component={AboutUs}/>

        <Route  exact path = "/OngoingSwipup" component={OngoingSwipup}/>
        <Route exact path="/ProfilePreview" component={ProfilePreview} />
        <Route  exact path = "/SpecializationModal" component={SpecializationModal}/>
        <Route  exact path = "/Specialization" component={Specialization}/>
        <Route  exact path = "/SpecializationConform" component={SpecializationConform}/>
        <Route  exact path = "/SpecializationSelected" component={SpecializationSelected}/>
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/Deletemsg" component={Deletemsg} />
        <Route exact path="/FAQs" component={FAQs} />



{/* Added by Ranjeet  */}

        <Route exact path="/desktopLogin" component={DesktopLogin} />
        
   
       

        
        <Route component={Error}/>

      
        

   </Switch>
 );
}

export default AppRoute;
