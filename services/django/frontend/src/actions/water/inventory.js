import axios from 'axios';

import { GET_INVENTORY, DELETE_INVENTORY, ADD_INVENTORY } from '../types';
import { createMessage, returnErrors } from "../messages";

// GET SECURITY
export const getInventory = () => dispatch => {
  axios
  .get('/api/inventory/')
  .then( res => {
      dispatch ({
          type: GET_INVENTORY,
          payload: res.data
      });
  })
  .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE SECURITY
export const deleteInventory = id => dispatch => {
  axios
    .delete(`/api/inventory/${id}/`)
    .then(res => {
      dispatch(createMessage({ delete: "Indicador eliminado" }));
      dispatch({
        type: DELETE_INVENTORY,
        payload: id
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// ADD SECURITY
export const addInventory = (conv) => dispatch => {
  axios
    .post('/api/inventory/', conv)
    .then(res => {
      dispatch(createMessage({ add: "Indicador Agregado" }));
      dispatch({
        type: ADD_INVENTORY,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};