import axios from 'axios';

import { GET_ACCIDENT, DELETE_ACCIDENT, ADD_ACCIDENT } from '../types';
import { createMessage, returnErrors } from "../messages";

// GET SECURITY
export const getAccidents = () => dispatch => {
  axios
  .get('/api/accident/')
  .then( res => {
      dispatch ({
          type: GET_ACCIDENT,
          payload: res.data
      });
  })
  .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE SECURITY
export const deleteAccidents = id => dispatch => {
  axios
    .delete(`/api/accident/${id}/`)
    .then(res => {
      dispatch(createMessage({ delete: "Indicador eliminado" }));
      dispatch({
        type: DELETE_ACCIDENT,
        payload: id
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// ADD SECURITY
export const addAccidents = (conv) => dispatch => {
  axios
    .post('/api/accident/', conv)
    .then(res => {
      dispatch(createMessage({ add: "Indicador Agregado" }));
      dispatch({
        type: ADD_ACCIDENT,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};