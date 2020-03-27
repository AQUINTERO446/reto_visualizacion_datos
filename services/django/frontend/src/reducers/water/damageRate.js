import { GET_DAMAGE_RATE, DELETE_DAMAGE_RATE, ADD_DAMAGE_RATE } from "../../actions/types.js";

const initialState = {
    damageRate: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_DAMAGE_RATE:
            return {
                ...state,
                damageRate: action.payload
            };
        case DELETE_DAMAGE_RATE:
            return {
                ...state,
                damageRate: state.damageRate.filter(damageRate => damageRate.id !== action.payload)
            };
        case ADD_DAMAGE_RATE:
            return {
                ...state,
                damageRate: [...state.damageRate, action.payload]
            };
        default:
            return state;
    }
}