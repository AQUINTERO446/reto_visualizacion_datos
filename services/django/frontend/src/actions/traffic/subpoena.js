import axios from 'axios';

import { GET_SUBPOENA, DELETE_SUBPOENA, ADD_SUBPOENA } from '../types';
import { createMessage, returnErrors } from "../messages";

// GET SECURITY
export const getSubpoena = () => dispatch => {
  axios
  .get('/api/subpoena/')
  .then( res => {
      dispatch ({
          type: GET_SUBPOENA,
          payload: res.data
      });
  })
  .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE SECURITY
export const deleteSubpoena = id => dispatch => {
  axios
    .delete(`/api/subpoena/${id}/`)
    .then(res => {
      dispatch(createMessage({ delete: "Indicador eliminado" }));
      dispatch({
        type: DELETE_SUBPOENA,
        payload: id
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// ADD SECURITY
export const addSubpoena = (conv) => dispatch => {
  axios
    .post('/api/subpoena/', conv)
    .then(res => {
      dispatch(createMessage({ add: "Indicador Agregado" }));
      dispatch({
        type: ADD_SUBPOENA,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};