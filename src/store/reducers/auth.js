import { AUTH_SET_TOKEN } from '../actions/actionTypes';

const initialState = {
    token: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTH_SET_TOKEN: 
            return {
                ...state,
                token: action.token
            };
        break;
        default:
            return state;
        break;
    }
}

export default reducer;