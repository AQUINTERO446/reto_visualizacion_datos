import { GET, DELETE, ADD } from "../../actions/types.js";

const initialState = {
    coexistence: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET:
            return {
                ...state,
                coexistence: action.payload
            };
        case DELETE:
            return {
                ...state,
                coexistence: state.coexistence.filter(coexistence => coexistence.id !== action.payload)
            };
        case ADD:
            return {
                ...state,
                coexistence: [...state.coexistence, action.payload]
            };
        default:
            return state;
    }
}