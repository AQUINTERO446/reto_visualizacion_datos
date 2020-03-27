import { GET_ACCIDENT, DELETE_ACCIDENT, ADD_ACCIDENT } from "../../actions/types.js";

const initialState = {
    accidents: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_ACCIDENT:
            return {
                ...state,
                accidents: action.payload
            };
        case DELETE_ACCIDENT:
            return {
                ...state,
                accidents: state.accidents.filter(accidents => accidents.id !== action.payload)
            };
        case ADD_ACCIDENT:
            return {
                ...state,
                accidents: [...state.accidents, action.payload]
            };
        default:
            return state;
    }
}