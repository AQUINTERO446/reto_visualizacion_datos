import axios from 'axios';

import { GET, DELETE, ADD } from '../types';
import { createMessage, returnErrors } from "../messages";

// GET SECURITY
export const getInjuries = () => dispatch => {
  axios
  .get('/api/injurie/')
  .then( res => {
      dispatch ({
          type: GET,
          payload: res.data
      });
  })
  .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE SECURITY
export const deleteInjuries = id => dispatch => {
  axios
    .delete(`/api/injurie/${id}/`)
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
export const addInjuries = (conv) => dispatch => {
  axios
    .post('/api/injurie/', conv)
    .then(res => {
      dispatch(createMessage({ add: "Indicador Agregado" }));
      dispatch({
        type: ADD,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};