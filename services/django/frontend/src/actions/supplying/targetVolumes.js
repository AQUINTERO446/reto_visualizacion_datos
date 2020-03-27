import axios from 'axios';

import { GET, DELETE, ADD } from '../types';
import { createMessage, returnErrors } from "../messages";

// GET SECURITY
export const getTargetVolumes = () => dispatch => {
  axios
  .get('/api/target_volumes/')
  .then( res => {
      dispatch ({
          type: GET,
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
        type: DELETE,
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
        type: ADD,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};