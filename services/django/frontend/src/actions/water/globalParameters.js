import axios from 'axios';

import { GET_GLOBAL_PARAMETERS, DELETE_GLOBAL_PARAMETERS, ADD_GLOBAL_PARAMETERS } from '../types';
import { createMessage, returnErrors } from "../messages";

// GET SECURITY
export const getGlobalParameters = () => dispatch => {
  axios
  .get('/api/global_parameters/')
  .then( res => {
      dispatch ({
          type: GET_GLOBAL_PARAMETERS,
          payload: res.data
      });
  })
  .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE SECURITY
export const deleteGlobalParameters = id => dispatch => {
  axios
    .delete(`/api/global_parameters/${id}/`)
    .then(res => {
      dispatch(createMessage({ delete: "Indicador eliminado" }));
      dispatch({
        type: DELETE_GLOBAL_PARAMETERS,
        payload: id
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// ADD SECURITY
export const addGlobalParameters = (conv) => dispatch => {
  axios
    .post('/api/global_parameters/', conv)
    .then(res => {
      dispatch(createMessage({ add: "Indicador Agregado" }));
      dispatch({
        type: ADD_GLOBAL_PARAMETERS,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};