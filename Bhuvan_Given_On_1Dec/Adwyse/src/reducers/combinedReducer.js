import {combineReducers} from 'redux';

import personalDetail from './personalDetail'
import ProfessionalDetails from './ProfessionalDetails'

export default combineReducers({
  personalDetail,
  ProfessionalDetails
})