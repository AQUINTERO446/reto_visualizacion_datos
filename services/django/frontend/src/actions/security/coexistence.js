import axios from 'axios';

import { GET_COEXISTENCE, DELETE_COEXISTENCE, ADD_COEXISTENCE } from '../types';
import { createMessage, returnErrors } from "../messages";

// GET SECURITY
export const getCoexistence = () => dispatch => {
  axios
  .get('/api/conv/')
  .then( res => {
      dispatch ({
          type: GET_COEXISTENCE,
          payload: res.data
      });
  })
  .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE SECURITY
export const deleteCoexistence = id => dispatch => {
  axios
    .delete(`/api/conv/${id}/`)
    .then(res => {
      dispatch(createMessage({ delete: "Indicador eliminado" }));
      dispatch({
        type: DELETE_COEXISTENCE,
        payload: id
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// ADD SECURITY
export const addCoexistence = (conv) => dispatch => {
  axios
    .post('/api/conv/', conv)
    .then(res => {
      dispatch(createMessage({ add: "Indicador Agregado" }));
      dispatch({
        type: ADD_COEXISTENCE,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};