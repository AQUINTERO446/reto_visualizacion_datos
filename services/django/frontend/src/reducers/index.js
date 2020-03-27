import { combineReducers } from 'redux';
import security from './security';
import coexistence from './coexistence';
import supplying from './supplying';
import targetVolumes from './targetVolumes';
import errors from './errors';
import messages from "./messages";

export default combineReducers({
    security,
    coexistence,
    supplying,
    targetVolumes,
    errors,
    messages,
});