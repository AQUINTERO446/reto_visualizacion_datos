import { combineReducers } from 'redux';
// Security
import security from './security/security';
import coexistence from './security/coexistence';
// Supplying
import supplying from './supplying/supplying';
import targetVolumes from './supplying/targetVolumes';
// Traffic
import metrolinea from './traffic/metrolinea';
import subpoena from './traffic/subpoena';
import accidents from './traffic/accidents';
import injuries from './traffic/injuries';
import deaths from './traffic/deaths';
// Water
import damageRate from './water/damageRate';
import inventory from './water/inventory';
import reinstallationWaterService from './water/reinstallationWaterService';
import waterProduction from './water/waterProduction';
import waterSources from './water/waterSources';
import globalParameters from './water/globalParameters';

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
    damageRate,
    inventory,
    reinstallationWaterService,
    waterProduction,
    waterSources,
    globalParameters,
    errors,
    messages,
});