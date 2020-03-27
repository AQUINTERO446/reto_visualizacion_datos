import { GET, DELETE, ADD } from "../../actions/types.js";

const initialState = {
    deaths: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET:
            return {
                ...state,
                deaths: action.payload
            };
        case DELETE:
            return {
                ...state,
                deaths: state.deaths.filter(deaths => deaths.id !== action.payload)
            };
        case ADD:
            return {
                ...state,
                deaths: [...state.deaths, action.payload]
            };
        default:
            return state;
    }
}