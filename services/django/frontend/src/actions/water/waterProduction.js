import axios from 'axios';

import { GET_WATER_PRODUCTION, DELETE_WATER_PRODUCTION, ADD_WATER_PRODUCTION } from '../types';
import { createMessage, returnErrors } from "../messages";

// GET SECURITY
export const getWaterProduction = () => dispatch => {
  axios
  .get('/api/water_production/')
  .then( res => {
      dispatch ({
          type: GET_WATER_PRODUCTION,
          payload: res.data
      });
  })
  .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE SECURITY
export const deleteWaterProduction = id => dispatch => {
  axios
    .delete(`/api/water_production/${id}/`)
    .then(res => {
      dispatch(createMessage({ delete: "Indicador eliminado" }));
      dispatch({
        type: DELETE_WATER_PRODUCTION,
        payload: id
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// ADD SECURITY
export const addWaterProduction = (conv) => dispatch => {
  axios
    .post('/api/water_production/', conv)
    .then(res => {
      dispatch(createMessage({ add: "Indicador Agregado" }));
      dispatch({
        type: ADD_WATER_PRODUCTION,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};