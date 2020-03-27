import { GET, DELETE, ADD } from "../../actions/types.js";

const initialState = {
    metrolinea: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET:
            return {
                ...state,
                metrolinea: action.payload
            };
        case DELETE:
            return {
                ...state,
                metrolinea: state.metrolinea.filter(metrolinea => metrolinea.id !== action.payload)
            };
        case ADD:
            return {
                ...state,
                metrolinea: [...state.metrolinea, action.payload]
            };
        default:
            return state;
    }
}