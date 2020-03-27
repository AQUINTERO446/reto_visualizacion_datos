import { GET, DELETE, ADD } from "../../actions/types.js";

const initialState = {
    security: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET:
            return {
                ...state,
                security: action.payload
            };
        case DELETE:
            return {
                ...state,
                security: state.security.filter(security => security.id !== action.payload)
            };
        case ADD:
            return {
                ...state,
                security: [...state.security, action.payload]
            };
        default:
            return state;
    }
}