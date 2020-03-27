import { GET_SECURITY, DELETE_SECURITY, ADD_SECURITY } from "../../actions/types.js";

const initialState = {
    security: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_SECURITY:
            return {
                ...state,
                security: action.payload
            };
        case DELETE_SECURITY:
            return {
                ...state,
                security: state.security.filter(security => security.id !== action.payload)
            };
        case ADD_SECURITY:
            return {
                ...state,
                security: [...state.security, action.payload]
            };
        default:
            return state;
    }
}