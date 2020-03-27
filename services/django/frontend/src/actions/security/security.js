import axios from 'axios';

import { GET, DELETE, ADD } from '../types';
import { createMessage, returnErrors } from "../messages";

// GET SECURITY
export const getSecurity = () => dispatch => {
  axios
  .get('/api/security/')
  .then( res => {
      dispatch ({
          type: GET,
          payload: res.data
      });
  })
  .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE SECURITY
export const deleteSecurity = id => dispatch => {
  axios
    .delete(`/api/security/${id}/`)
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
export const addSecurity = (security) => dispatch => {
  axios
    .post('/api/security/', security)
    .then(res => {
      dispatch(createMessage({ add: "Indicador Agregado" }));
      dispatch({
        type: ADD,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};