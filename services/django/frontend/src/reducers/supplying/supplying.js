import { GET_SUPPLYING, DELETE_SUPPLYING, ADD_SUPPLYING } from "../../actions/types.js";

const initialState = {
    supplying: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_SUPPLYING:
            return {
                ...state,
                supplying: action.payload
            };
        case DELETE_SUPPLYING:
            return {
                ...state,
                supplying: state.supplying.filter(supplying => supplying.id !== action.payload)
            };
        case ADD_SUPPLYING:
            return {
                ...state,
                supplying: [...state.supplying, action.payload]
            };
        default:
            return state;
    }
}