import { GET_DEATH, DELETE_DEATH, ADD_DEATH } from "../../actions/types.js";

const initialState = {
    deaths: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_DEATH:
            return {
                ...state,
                deaths: action.payload
            };
        case DELETE_DEATH:
            return {
                ...state,
                deaths: state.deaths.filter(deaths => deaths.id !== action.payload)
            };
        case ADD_DEATH:
            return {
                ...state,
                deaths: [...state.deaths, action.payload]
            };
        default:
            return state;
    }
}