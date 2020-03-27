import { GET_METROLINEA, DELETE_METROLINEA, ADD_METROLINEA } from "../../actions/types.js";

const initialState = {
    metrolinea: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_METROLINEA:
            return {
                ...state,
                metrolinea: action.payload
            };
        case DELETE_METROLINEA:
            return {
                ...state,
                metrolinea: state.metrolinea.filter(metrolinea => metrolinea.id !== action.payload)
            };
        case ADD_METROLINEA:
            return {
                ...state,
                metrolinea: [...state.metrolinea, action.payload]
            };
        default:
            return state;
    }
}