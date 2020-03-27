import axios from 'axios';

import { GET_DAMAGE_RATE, DELETE_DAMAGE_RATE, ADD_DAMAGE_RATE } from '../types';
import { createMessage, returnErrors } from "../messages";

// GET SECURITY
export const getDamageRate = () => dispatch => {
  axios
  .get('/api/damage_rate/')
  .then( res => {
      dispatch ({
          type: GET_DAMAGE_RATE,
          payload: res.data
      });
  })
  .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE SECURITY
export const deleteDamageRate = id => dispatch => {
  axios
    .delete(`/api/damage_rate/${id}/`)
    .then(res => {
      dispatch(createMessage({ delete: "Indicador eliminado" }));
      dispatch({
        type: DELETE_DAMAGE_RATE,
        payload: id
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// ADD SECURITY
export const addDamageRate = (conv) => dispatch => {
  axios
    .post('/api/damage_rate/', conv)
    .then(res => {
      dispatch(createMessage({ add: "Indicador Agregado" }));
      dispatch({
        type: ADD_DAMAGE_RATE,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};