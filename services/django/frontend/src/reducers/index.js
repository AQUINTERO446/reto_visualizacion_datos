import { combineReducers } from 'redux';
import security from './security/security';
import coexistence from './security/coexistence';
import supplying from './supplying/supplying';
import targetVolumes from './supplying/targetVolumes';
import metrolinea from './traffic/metrolinea';
import subpoena from './traffic/subpoena';
import accidents from './traffic/accidents';
import injuries from './traffic/injuries';
import deaths from './traffic/deaths';
import errors from './errors';
import messages from "./messages";

export default combineReducers({
    security,
    coexistence,
    supplying,
    targetVolumes,
    metrolinea,
    subpoena,
    accidents,
    injuries,
    deaths,
    errors,
    messages,
});