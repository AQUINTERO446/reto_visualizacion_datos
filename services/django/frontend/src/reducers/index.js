import { combineReducers } from 'redux';
import security from './security';
import coexistence from './coexistence';
import supplying from './supplying';
import errors from './errors';
import messages from "./messages";

export default combineReducers({
    security,
    coexistence,
    supplying,
    errors,
    messages,
});