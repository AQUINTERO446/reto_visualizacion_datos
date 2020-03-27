import axios from 'axios';

import { GET_WATER_SOURCES, DELETE_WATER_SOURCES, ADD_WATER_SOURCES } from '../types';
import { createMessage, returnErrors } from "../messages";

// GET SECURITY
export const getWaterSources = () => dispatch => {
  axios
  .get('/api/water_source/')
  .then( res => {
      dispatch ({
          type: GET_WATER_SOURCES,
          payload: res.data
      });
  })
  .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE SECURITY
export const deleteWaterSources = id => dispatch => {
  axios
    .delete(`/api/water_source/${id}/`)
    .then(res => {
      dispatch(createMessage({ delete: "Indicador eliminado" }));
      dispatch({
        type: DELETE_WATER_SOURCES,
        payload: id
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// ADD SECURITY
export const addWaterSources = (conv) => dispatch => {
  axios
    .post('/api/water_source/', conv)
    .then(res => {
      dispatch(createMessage({ add: "Indicador Agregado" }));
      dispatch({
        type: ADD_WATER_SOURCES,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};