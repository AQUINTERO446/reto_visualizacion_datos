import { GET_REINSTALLATION_RATER_SERVICE, DELETE_REINSTALLATION_RATER_SERVICE, ADD_REINSTALLATION_RATER_SERVICE } from "../../actions/types.js";

const initialState = {
    reinstallationWaterService: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_REINSTALLATION_RATER_SERVICE:
            return {
                ...state,
                reinstallationWaterService: action.payload
            };
        case DELETE_REINSTALLATION_RATER_SERVICE:
            return {
                ...state,
                reinstallationWaterService: state.reinstallationWaterService.filter(reinstallationWaterService => reinstallationWaterService.id !== action.payload)
            };
        case ADD_REINSTALLATION_RATER_SERVICE:
            return {
                ...state,
                reinstallationWaterService: [...state.reinstallationWaterService, action.payload]
            };
        default:
            return state;
    }
}