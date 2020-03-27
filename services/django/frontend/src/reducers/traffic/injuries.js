import { GET, DELETE, ADD } from "../../actions/types.js";

const initialState = {
    injuries: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET:
            return {
                ...state,
                injuries: action.payload
            };
        case DELETE:
            return {
                ...state,
                injuries: state.injuries.filter(injuries => injuries.id !== action.payload)
            };
        case ADD:
            return {
                ...state,
                injuries: [...state.injuries, action.payload]
            };
        default:
            return state;
    }
}