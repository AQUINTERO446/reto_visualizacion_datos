import { combineReducers } from 'redux';
import security from './security/security';
import coexistence from './security/coexistence';
import supplying from './supplying/supplying';
import targetVolumes from './supplying/targetVolumes';
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