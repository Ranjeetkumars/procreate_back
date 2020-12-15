//import axios from '../axios/axios';

const _addPersonalDetails = (doc) => ({
    type: 'ADD_PERSONAL_DETAILS',
    doc
});

export const addPersonalDetails = (docData = {
    firstname: '',
    lastname: '',
    phonenumber: '',
    clinicnumber: '',
    emailaddress:'',
    dateofbirth:'',
    addressline1:'',
    addressline2:'',
    townCity:'',
    stateRegion:''
}) => {
    return (dispatch) => {
        const doc = {
            firstname: docData.firstname,
            lastname: docData.lastname,
            phonenumber: docData.phonenumber,
            clinicnumber: docData.clinicnumber,
            emailaddress:docData.emailaddress,
            dateofbirth:docData.dateofbirth,
            addressline1:docData.addressline1,
            addressline2:docData.addressline2,
            townCity:docData.townCity,
            stateRegion:docData.stateRegion,
        };

        console.log("obj----------->"+JSON.stringify(doc));

        // return axios.post('books/create', doc).then(result => {
        //     dispatch(_addBook(result.data));
        // });
    };
};


export const addProfessionalDetails = (docData = {
    selectedSpecilaztion: '',
    medicalRegistrationNo: '',
    qualification: '',
    selectedExperience: ''
}) => {
    return (dispatch) => {
        const doc = {
            selectedSpecilaztion: docData.selectedSpecilaztion,
            medicalRegistrationNo: docData.medicalRegistrationNo,
            qualification: docData.qualification,
            selectedExperience: docData.selectedExperience,    
        };

        console.log("obj----------->"+JSON.stringify(doc));

        // return axios.post('books/create', doc).then(result => {
        //     dispatch(_addBook(result.data));
        // });
    };
};
