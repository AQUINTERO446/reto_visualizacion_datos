import axios from 'axios';

import { GET, DELETE, ADD } from '../types';
import { createMessage, returnErrors } from "../messages";

// GET SECURITY
export const getMetrolinea = () => dispatch => {
  axios
  .get('/api/metrolinea/')
  .then( res => {
      dispatch ({
          type: GET,
          payload: res.data
      });
  })
  .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE SECURITY
export const deleteMetrolinea = id => dispatch => {
  axios
    .delete(`/api/metrolinea/${id}/`)
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
export const addMetrolinea = (conv) => dispatch => {
  axios
    .post('/api/metrolinea/', conv)
    .then(res => {
      dispatch(createMessage({ add: "Indicador Agregado" }));
      dispatch({
        type: ADD,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};