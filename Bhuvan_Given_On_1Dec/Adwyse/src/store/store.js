
import { createStore } from 'redux'
const initialState = {
    prsnDetails: {},
    professional:{},
    accountInfo:{},
    awards:{},
  }


const reducer = (state = initialState, action) => {
    if (action.type === 'ADD_PERSONAL_DETAILS') {
     state['prsnDetails'] = action.payload;
     console.log(JSON.stringify(state));
     return state; 
    } 
    else if (action.type === 'ADD_PROFESSIONAL_DETAILS') {
      state['professional'] = action.payload;
      console.log(JSON.stringify(state));
      return state; 

    } 
    else if (action.type === 'ADD_AWARDS_RECOGNITION') {
      state['awards'] = action.payload;
      console.log(JSON.stringify(state));
      return state; 
      }
    else if (action.type === 'ADD_ACCOUNT_INFORMATION') {
      state['accountInfo'] = action.payload;
        return state; 
    } 
  
    return state;
  };
  const store = createStore(reducer);

export default store;

 


 