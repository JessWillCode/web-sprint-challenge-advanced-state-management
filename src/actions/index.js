import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const SET_ERROR = 'SET_ERROR';

export const fetchSmurfs = () => (dispatch) => {
    dispatch(fetchStart());
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res.data);
        dispatch(fetchSuccess(res.data));
    })
    .catch(err => {
        dispatch(fetchFail(err));
    })
}

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const fetchSuccess = (smurf) => {
    return({type: FETCH_SUCCESS, payload: smurf});
}

export const fetchFail = (errorMessage) => {
    return({type: FETCH_FAIL, payload: errorMessage});
}

export const addSmurf = (newSmurf) => {
    return ({type: ADD_SMURF, payload: newSmurf});
}

export const setError = (error) => {
    return({type: SET_ERROR, payload: error});
}