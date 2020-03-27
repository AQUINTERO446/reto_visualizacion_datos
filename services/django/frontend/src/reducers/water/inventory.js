import { GET_INVENTORY, DELETE_INVENTORY, ADD_INVENTORY } from "../../actions/types.js";

const initialState = {
    inventory: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_INVENTORY:
            return {
                ...state,
                inventory: action.payload
            };
        case DELETE_INVENTORY:
            return {
                ...state,
                inventory: state.inventory.filter(inventory => inventory.id !== action.payload)
            };
        case ADD_INVENTORY:
            return {
                ...state,
                inventory: [...state.inventory, action.payload]
            };
        default:
            return state;
    }
}