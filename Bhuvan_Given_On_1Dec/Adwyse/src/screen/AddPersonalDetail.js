import React from 'react';
import { connect } from 'react-redux';
//import { addPersonalDetails } from '../actions/personalDetail';
import PersonalDetails from './personalDetails'
const AddPersonalDetail = (props) => (
    <div>
        <PersonalDetails
            onSubmitPersonalDetails={(book) => {
                console.log(book)
                props.dispatch({type:'ADD_PERSONAL_DETAILS',
                                payload:book})
               props.history.push('/AddProfessionalDetails');
            }}
        />

    </div>
);

export default connect()(AddPersonalDetail);
