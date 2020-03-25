import { combineReducers } from 'redux';
import security from './security';
import errors from './errors';
import messages from "./messages";

export default combineReducers({
    security,
    errors,
    messages,
});