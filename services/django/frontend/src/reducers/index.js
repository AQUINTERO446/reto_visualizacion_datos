import { combineReducers } from 'redux';
import security from './security';
import coexistence from './coexistence';
import errors from './errors';
import messages from "./messages";

export default combineReducers({
    security,
    coexistence,
    errors,
    messages,
});