const professionalReducerDefaultState = [];


export default (state = professionalReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PROFESSIONAL_DETAILS':
            return [
                ...state,
                action.book
            ];
       
    }
};
