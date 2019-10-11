import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const POST_SMURFS_START = 'POST_SMURFS_START';
export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS';
export const POST_SMURFS_FAILURE = 'POST_SMURFS_FAILURE';
export const DELETE_SMURFS_START = 'DELETE_SMURFS_START';
export const DELETE_SMURFS_SUCCESS = 'DELETE_SMURFS_SUCCESS';
export const DELETE_SMURFS_FAILURE = 'DELETE_SMURFS_FAILURE';

export const fetchSmurfData = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({
        type: FETCH_SMURFS_SUCCESS,
        payload: res.data,
        isFetching: false
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_SMURFS_FAILURE,
        payload: `${err.response.status}: ${err.response.statusText}`,
        isFetching: false
      });
    });
};

export const postSmurfData = newSmurf => dispatch => {
  dispatch({ type: POST_SMURFS_START });
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
      dispatch({ type: POST_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: POST_SMURFS_FAILURE,
        payload: `${err.response.status}: ${err.response.statusText}`
      });
    });
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURFS_START });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: DELETE_SMURFS_FAILURE,
        payload: `${err.response.status}: ${err.response.statusText}`
      });
    });
};
