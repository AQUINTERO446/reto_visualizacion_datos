import { GET, DELETE, ADD } from "../../actions/types.js";

const initialState = {
    accidents: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET:
            return {
                ...state,
                accidents: action.payload
            };
        case DELETE:
            return {
                ...state,
                accidents: state.accidents.filter(accidents => accidents.id !== action.payload)
            };
        case ADD:
            return {
                ...state,
                accidents: [...state.accidents, action.payload]
            };
        default:
            return state;
    }
}