import axios from 'axios';

import { GET_DEATH, DELETE_DEATH, ADD_DEATH } from '../types';
import { createMessage, returnErrors } from "../messages";

// GET SECURITY
export const getDeaths = () => dispatch => {
  axios
  .get('/api/death/')
  .then( res => {
      dispatch ({
          type: GET_DEATH,
          payload: res.data
      });
  })
  .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE SECURITY
export const deleteDeaths = id => dispatch => {
  axios
    .delete(`/api/death/${id}/`)
    .then(res => {
      dispatch(createMessage({ delete: "Indicador eliminado" }));
      dispatch({
        type: DELETE_DEATH,
        payload: id
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// ADD SECURITY
export const addDeaths = (conv) => dispatch => {
  axios
    .post('/api/death/', conv)
    .then(res => {
      dispatch(createMessage({ add: "Indicador Agregado" }));
      dispatch({
        type: ADD_DEATH,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};