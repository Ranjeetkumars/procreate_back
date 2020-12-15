import React from 'react';
import { connect } from 'react-redux';
//import { addProfessionalDetails } from '../actions/ProfessionalDetail';
import ProfessionalDetails from './ProfessionalDetails'
const AddProfessionalDetails = (props) => (
    <div>
        <ProfessionalDetails
         onSubmitPersonalDetails={(book) => {
                console.log(book)
                props.dispatch({type:'ADD_PROFESSIONAL_DETAILS',
                payload:book})
                props.history.push('/');
            }}
        />
    </div>
);



export default connect() (AddProfessionalDetails);
