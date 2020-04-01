import { GET_GLOBAL_PARAMETERS, DELETE_GLOBAL_PARAMETERS, ADD_GLOBAL_PARAMETERS } from "../../actions/types.js";

const initialState = {
    globalParameters: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_GLOBAL_PARAMETERS:
            return {
                ...state,
                damageRate: action.payload
            };
        case DELETE_GLOBAL_PARAMETERS:
            return {
                ...state,
                damageRate: state.damageRate.filter(damageRate => damageRate.id !== action.payload)
            };
        case ADD_GLOBAL_PARAMETERS:
            return {
                ...state,
                damageRate: [...state.damageRate, action.payload]
            };
        default:
            return state;
    }
}