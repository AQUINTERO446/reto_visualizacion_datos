import axios from 'axios';

import { GET_SUPPLYING, DELETE_SUPPLYING, ADD_SUPPLYING } from '../types';
import { createMessage, returnErrors } from "../messages";

// GET SECURITY
export const getSupplying = () => dispatch => {
  axios
  .get('/api/volume/')
  .then( res => {
      dispatch ({
          type: GET_SUPPLYING,
          payload: res.data
      });
  })
  .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE SECURITY
export const deleteSupplying = id => dispatch => {
  axios
    .delete(`/api/volume/${id}/`)
    .then(res => {
      dispatch(createMessage({ delete: "Indicador eliminado" }));
      dispatch({
        type: DELETE_SUPPLYING,
        payload: id
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// ADD SECURITY
export const addSupplying = (conv) => dispatch => {
  axios
    .post('/api/volume/', conv)
    .then(res => {
      dispatch(createMessage({ add: "Indicador Agregado" }));
      dispatch({
        type: ADD_SUPPLYING,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};