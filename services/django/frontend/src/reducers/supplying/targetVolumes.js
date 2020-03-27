import { GET, DELETE, ADD } from "../../actions/types.js";

const initialState = {
    targetVolumes: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET:
            return {
                ...state,
                targetVolumes: action.payload
            };
        case DELETE:
            return {
                ...state,
                targetVolumes: state.targetVolumes.filter(targetVolumes => targetVolumes.id !== action.payload)
            };
        case ADD:
            return {
                ...state,
                targetVolumes: [...state.targetVolumes, action.payload]
            };
        default:
            return state;
    }
}