import { GET_WATER_PRODUCTION, DELETE_WATER_PRODUCTION, ADD_WATER_PRODUCTION } from "../../actions/types.js";

const initialState = {
    waterProduction: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_WATER_PRODUCTION:
            return {
                ...state,
                waterProduction: action.payload
            };
        case DELETE_WATER_PRODUCTION:
            return {
                ...state,
                waterProduction: state.waterProduction.filter(waterProduction => waterProduction.id !== action.payload)
            };
        case ADD_WATER_PRODUCTION:
            return {
                ...state,
                waterProduction: [...state.waterProduction, action.payload]
            };
        default:
            return state;
    }
}