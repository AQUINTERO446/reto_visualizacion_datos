import { GET_COEXISTENCE, DELETE_COEXISTENCE, ADD_COEXISTENCE } from "../../actions/types.js";

const initialState = {
    coexistence: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_COEXISTENCE:
            return {
                ...state,
                coexistence: action.payload
            };
        case DELETE_COEXISTENCE:
            return {
                ...state,
                coexistence: state.coexistence.filter(coexistence => coexistence.id !== action.payload)
            };
        case ADD_COEXISTENCE:
            return {
                ...state,
                coexistence: [...state.coexistence, action.payload]
            };
        default:
            return state;
    }
}