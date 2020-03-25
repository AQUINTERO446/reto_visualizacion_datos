import axios from 'axios';

import { GET_SECURITY, DELETE_SECURITY, ADD_SECURITY } from './types';

// GET SECURITY
export const getSecurity = () => dispatch => {
  axios
  .get('/api/security/')
  .then( res => {
      dispatch ({
          type: GET_SECURITY,
          payload: res.data
      });
  })
  .catch(err => console.log(err));
};

// DELETE SECURITY
export const deleteSecurity = id => dispatch => {
  axios
    .delete(`/api/security/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_SECURITY,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD SECURITY
export const addSecurity = (security) => dispatch => {
  axios
    .post('/api/security/', security)
    .then(res => {
      dispatch({
        type: ADD_SECURITY,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};