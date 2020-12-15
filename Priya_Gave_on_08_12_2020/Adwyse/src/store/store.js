import { createStore } from "redux";
/* const initialState = {
  prsnDetails: {},
  professional: {},
  accountInfo: {},
  awards: {},
  phonenum: "",
  emailid: "",
};

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_PERSONAL_DETAILS") {
    state["prsnDetails"] = action.payload;
    console.log(JSON.stringify(state));
  } else if (action.type === "ADD_PROFESSIONAL_DETAILS") {
    state["professional"] = action.payload;
    console.log(JSON.stringify(state));
  } else if (action.type === "ADD_AWARDS_RECOGNITION") {
    state["awards"] = action.payload;
    console.log(JSON.stringify(state));
  } else if (action.type === "ADD_ACCOUNT_INFORMATION") {
    state["accountInfo"] = action.payload;
  } else if (action.type === "UPDATE_PHONENUM") {
    state["phonenum"] = action.payload;
  } else if (action.type === "UPDATE_EMAILID") {
    state["emailid"] = action.payload;
  }
  
  return state;
};
const store = createStore(reducer);

export default store; */

const initialState = {
  prsnDetails: "",
};
const reducer = (state = initialState, action) => {
  if (action.type === "Consultation_Fees") {
    state["prsnDetails"] = action.payload;
    console.log(JSON.stringify(state));
  }

  return state;
};
const store = createStore(reducer);

export default store;
