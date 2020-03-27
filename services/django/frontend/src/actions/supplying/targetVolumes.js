import axios from 'axios';

import { GET_TARGET_VOLUME, DELETE_TARGET_VOLUME, ADD_TARGET_VOLUME } from '../types';
import { createMessage, returnErrors } from "../messages";

// GET SECURITY
export const getTargetVolumes = () => dispatch => {
  axios
  .get('/api/target_volumes/')
  .then( res => {
      dispatch ({
          type: GET_TARGET_VOLUME,
          payload: res.data
      });
  })
  .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE SECURITY
export const deleteTargetVolumes = id => dispatch => {
  axios
    .delete(`/api/target_volumes/${id}/`)
    .then(res => {
      dispatch(createMessage({ delete: "Indicador eliminado" }));
      dispatch({
        type: DELETE_TARGET_VOLUME,
        payload: id
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// ADD SECURITY
export const addTargetVolumes = (conv) => dispatch => {
  axios
    .post('/api/target_volumes/', conv)
    .then(res => {
      dispatch(createMessage({ add: "Indicador Agregado" }));
      dispatch({
        type: ADD_TARGET_VOLUME,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};