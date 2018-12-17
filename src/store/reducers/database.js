import * as actionTypes from './../actions/actionTypes';

const initialState = {
    comments:  [],
    // token:"todo auth"
}


const database = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_ALL_COMMENTS:
            return setAllComments(state, action);
            case actionTypes.LOG_IN:
                        return setToken(state, action);
        case actionTypes.INSERT_COMMENTS:
        default:
            return state;
    }
};

const setAllComments = (state, action) => {
    return {
        ...state,
        comments: action.payload
    };
}
const setToken = (state, action) => {
    return {
        ...state,
        token: action.payload
    };
}

export default database;
