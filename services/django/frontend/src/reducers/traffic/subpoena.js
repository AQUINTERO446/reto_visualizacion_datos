import { GET, DELETE, ADD } from "../../actions/types.js";

const initialState = {
    subpoena: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET:
            return {
                ...state,
                subpoena: action.payload
            };
        case DELETE:
            return {
                ...state,
                subpoena: state.subpoena.filter(subpoena => subpoena.id !== action.payload)
            };
        case ADD:
            return {
                ...state,
                subpoena: [...state.subpoena, action.payload]
            };
        default:
            return state;
    }
}