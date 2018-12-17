import * as actionTypes from './../actions/actionTypes';

const initialState = {
    comments:  []
}


const database = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_ALL_COMMENTS:
        case actionTypes.INSERT_COMMENTS:
        default:
            return state;
    }
};

export default database;
