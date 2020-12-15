
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
