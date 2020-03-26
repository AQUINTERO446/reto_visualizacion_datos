import { GET, DELETE, ADD } from "../actions/types.js";

const initialState = {
    supplying: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET:
            return {
                ...state,
                supplying: action.payload
            };
        case DELETE:
            return {
                ...state,
                supplying: state.supplying.filter(supplying => supplying.id !== action.payload)
            };
        case ADD:
            return {
                ...state,
                supplying: [...state.supplying, action.payload]
            };
        default:
            return state;
    }
}