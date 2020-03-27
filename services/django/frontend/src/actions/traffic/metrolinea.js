import axios from 'axios';

import { GET_METROLINEA, DELETE_METROLINEA, ADD_METROLINEA } from '../types';
import { createMessage, returnErrors } from "../messages";

// GET SECURITY
export const getMetrolinea = () => dispatch => {
  axios
  .get('/api/metrolinea/')
  .then( res => {
      dispatch ({
          type: GET_METROLINEA,
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
        type: DELETE_METROLINEA,
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
        type: ADD_METROLINEA,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};