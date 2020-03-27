import axios from 'axios';

import { GET_REINSTALLATION_RATER_SERVICE, DELETE_REINSTALLATION_RATER_SERVICE, ADD_REINSTALLATION_RATER_SERVICE } from '../types';
import { createMessage, returnErrors } from "../messages";

// GET SECURITY
export const getReinstallationWaterService = () => dispatch => {
  axios
  .get('/api/reinstallation_water/')
  .then( res => {
      dispatch ({
          type: GET_REINSTALLATION_RATER_SERVICE,
          payload: res.data
      });
  })
  .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE SECURITY
export const deleteReinstallationWaterService = id => dispatch => {
  axios
    .delete(`/api/reinstallation_water/${id}/`)
    .then(res => {
      dispatch(createMessage({ delete: "Indicador eliminado" }));
      dispatch({
        type: DELETE_REINSTALLATION_RATER_SERVICE,
        payload: id
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// ADD SECURITY
export const addReinstallationWaterService = (conv) => dispatch => {
  axios
    .post('/api/reinstallation_water/', conv)
    .then(res => {
      dispatch(createMessage({ add: "Indicador Agregado" }));
      dispatch({
        type: ADD_REINSTALLATION_RATER_SERVICE,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};