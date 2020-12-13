import "./App.css";
import EmployeeDetails from "./components/EmployeeDetails";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import EmployeeRegistration from "./components/EmployeeRegistration";
import AdwyseLogin from "./components/AdwyseLogin";
import personalDetails from "./components/personalDetails";

import Error from "./components/Error";
import AllowNotification from "./components/AllowNotification";
import LocationPermission from "./components/LocationPermission";
import CameraPermission from "./components/CameraPermission";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={EmployeeDetails} />
      <Route exact path="/empRegistration" component={EmployeeRegistration} />
      <Route exact path="/login" component={AdwyseLogin} />
      <Route exact path="/personalDetails" component={personalDetails} />
      <Route exact path="/allownotification" component={AllowNotification} />
      <Route exact path="/locationpermission" component={LocationPermission} />
      <Route exact path="/camerapermission" component={CameraPermission} />
      <Route component={Error} />
    </Switch>
  );
}

export default App;
