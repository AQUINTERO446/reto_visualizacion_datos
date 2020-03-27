import { GET_SUBPOENA, DELETE_SUBPOENA, ADD_SUBPOENA } from "../../actions/types.js";

const initialState = {
    subpoena: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_SUBPOENA:
            return {
                ...state,
                subpoena: action.payload
            };
        case DELETE_SUBPOENA:
            return {
                ...state,
                subpoena: state.subpoena.filter(subpoena => subpoena.id !== action.payload)
            };
        case ADD_SUBPOENA:
            return {
                ...state,
                subpoena: [...state.subpoena, action.payload]
            };
        default:
            return state;
    }
}