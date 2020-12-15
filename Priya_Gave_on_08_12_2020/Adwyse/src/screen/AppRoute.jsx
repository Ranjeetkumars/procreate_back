/* import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; */
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import personalDetails from "./personalDetails";
import PersonalDetailsStepTwo from "./PersonalDetailsStepTwo";

import Error from "../components/Error";

import AllowNotification from "../components/AllowNotification";
import CameraPermission from "../components/CameraPermission";
import LocationPermission from "../components/LocationPermission";
import AccountInformation from "../screen/AccountInformation";
import Awards_Recognition from "../screen/Awards_Recognition";
import StayConnected from "../screen/StayConnected";
import PrivacyGuaranteed from "../screen/PrivacyGuaranteed";
import EasyAppointments from "../screen/EasyAppointments";
import UpFrontPayment from "../screen/UpFrontPayment";
import GetStarted from "../screen/GetStarted";
import Landing from "../screen/Landing";
import ResetPassword from "../screen/ResetPassword";
import Entry from "../screen/Entry";
import Password from "../screen/Password";

import FirstConsultationFees from "../ConsultationFees/FirstConsultationFees";
import ConsultationFees from "../ConsultationFees/ConsultationFees";

import { SplitButton } from "primereact/splitbutton";

import RegistrationUnderReview from "../screen/RegistrationUnderReview";
import TermsConditions from "../screen/Terms&Conditions";
import AboutUs from "../screen/AboutUs";
import Settings from "../screen/Settings";
import login from "../screen/login";

import OngoingSwipup from "../screen/OngoingSwipup";
import ProfilePreview from "../screen/ProfilePreview";
/* import SpecializationConform from "../screen/SpecializationConform"; */
import SpecializationSelected from "../Specialization/SpecializationSelected";
import AdwyseLogin from "../screen/AdwyseLogin";
/* import Availability from "../screen/Availability"; */
/*  import Availability2 from "../src/components/DoctorAvailability2"; */
import Splash from "../screen/Splash";
import Confirmation from "../screen/Confirmation";
/* import SplitButtonDemo from './ConsultationFees/SplitButtonDemo'; */
import ConsultationFeesCompleted from "../ConsultationFees/ConsultationFeesCompleted";

import pocs from "../ConsultationFees/pocs";
import CallSummary from "../CallSummary/CallSummary";
import CallSummaryPaid from "../CallSummary/CallSummaryPaid";
import CallSummaryFree from "../CallSummary/CallSummaryFree";
import MoreLanding from "../More/MoreLanding";
import ReminderCancel from "../Reminder/ReminderCancel";
import Reminder from "../Reminder/Reminder";
import Availability from "../Availability/Availability ";
/* import kk from "../Specialization/kk"; */
function AppRoute() {
  return (
    <Switch>
      <Route exact path="/OngoingSwipup" component={OngoingSwipup} />
      <Route exact path="/ProfilePreview" component={ProfilePreview} />
      {/*    <Route
        exact
        path="/SpecializationConform"
        component={SpecializationConform}
      />
      <Route
        exact
        path="/SpecializationSelected"
        component={SpecializationSelected}
      /> */}
      <Route exact path="/login" component={login} />
      <Route exact path="/setting" component={Settings} />
      <Route exact path="/" component={personalDetails} />
      <Route exact path="/psteptwo" component={PersonalDetailsStepTwo} />
      <Route exact path="/AccountInformation" component={AccountInformation} />
      <Route exact path="/Awards_Recognition" component={Awards_Recognition} />
      <Route exact path="/AdwyseLogin" component={AdwyseLogin} />
      {/*    <Route exact path="/Availability" component={Availability} /> */}
      {/*       <Route exact path="/Availability2" component={Availability2} />
       */}{" "}
      <Route exact path="/Splash" component={Splash} />
      <Route exact path="/AllowNotification" component={AllowNotification} />
      <Route exact path="/CameraPermission" component={CameraPermission} />
      <Route exact path="/LocationPermission" component={LocationPermission} />
      <Route exact path="/StayConnected" component={StayConnected} />
      <Route exact path="/PrivacyGuaranteed" component={PrivacyGuaranteed} />
      <Route exact path="/EasyAppointments" component={EasyAppointments} />
      <Route exact path="/UpFrontPayment" component={UpFrontPayment} />
      <Route exact path="/GetStarted" component={GetStarted} />
      <Route
        exact
        path="/RegistrationUnderReview"
        component={RegistrationUnderReview}
      />
      <Route exact path="/TermsConditions" component={TermsConditions} />
      <Route exact path="/AboutUs" component={AboutUs} />
      <Route exact path="/Landing" component={Landing} />
      <Route exact path="/ResetPassword" component={ResetPassword} />
      <Route exact path="/Entry" component={Entry} />
      <Route exact path="/Password" component={Password} />
      <Route
        exact
        path="/FirstConsultationFees"
        component={FirstConsultationFees}
      />
      <Route exact path="/ConsultationFees" component={ConsultationFees} />
      <Route exact path="/Confirmation" component={Confirmation} />
      {/*  <Route  exact path = "/SplitButtonDemo" component={SplitButtonDemo}/> */}
      <Route
        exact
        path="/ConsultationFeesCompleted"
        component={ConsultationFeesCompleted}
      />
      <Route exact path="/pocs" component={pocs} />
      <Route exact path="/CallSummary" component={CallSummary} />
      <Route exact path="/CallSummaryPaid" component={CallSummaryPaid} />
      <Route exact path="/CallSummaryFree" component={CallSummaryFree} />
      <Route exact path="/MoreLanding" component={MoreLanding} />
      <Route exact path="/ReminderCancel" component={ReminderCancel} />
      <Route exact path="/Reminder" component={Reminder} />
      <Route exact path="/Availability" component={Availability} />
      {/*      <Route exact path="/kk" component={kk} /> */}
      <Route component={Error} />
    </Switch>
  );
}

export default AppRoute;
