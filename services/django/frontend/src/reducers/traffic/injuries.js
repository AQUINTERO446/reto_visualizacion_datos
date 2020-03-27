import { GET_INJURIES, DELETE_INJURIES, ADD_INJURIES } from "../../actions/types.js";

const initialState = {
    injuries: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_INJURIES:
            return {
                ...state,
                injuries: action.payload
            };
        case DELETE_INJURIES:
            return {
                ...state,
                injuries: state.injuries.filter(injuries => injuries.id !== action.payload)
            };
        case ADD_INJURIES:
            return {
                ...state,
                injuries: [...state.injuries, action.payload]
            };
        default:
            return state;
    }
}