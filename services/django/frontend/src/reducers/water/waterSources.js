import { GET_WATER_SOURCES, DELETE_WATER_SOURCES, ADD_WATER_SOURCES } from "../../actions/types.js";

const initialState = {
    waterSources: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_WATER_SOURCES:
            return {
                ...state,
                waterSources: action.payload
            };
        case DELETE_WATER_SOURCES:
            return {
                ...state,
                waterSources: state.waterSources.filter(waterSources => waterSources.id !== action.payload)
            };
        case ADD_WATER_SOURCES:
            return {
                ...state,
                waterSources: [...state.waterSources, action.payload]
            };
        default:
            return state;
    }
}