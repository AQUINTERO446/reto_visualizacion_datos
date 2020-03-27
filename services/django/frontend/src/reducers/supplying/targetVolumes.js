import { GET_TARGET_VOLUME, DELETE_TARGET_VOLUME, ADD_TARGET_VOLUME } from "../../actions/types.js";

const initialState = {
    targetVolumes: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_TARGET_VOLUME:
            return {
                ...state,
                targetVolumes: action.payload
            };
        case DELETE_TARGET_VOLUME:
            return {
                ...state,
                targetVolumes: state.targetVolumes.filter(targetVolumes => targetVolumes.id !== action.payload)
            };
        case ADD_TARGET_VOLUME:
            return {
                ...state,
                targetVolumes: [...state.targetVolumes, action.payload]
            };
        default:
            return state;
    }
}