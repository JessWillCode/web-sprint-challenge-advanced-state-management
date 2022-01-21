import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_SMURF, SET_ERROR } from '../actions';

export const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
}

// const testSmurf = {
//     id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
//     name:'Poppa Smurf',
//     position:'Village Leader',
//     nickname: 'Pops',
//     description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
// }

const reducer = (state = initialState, action)=>{
    switch(action.type) {
        case FETCH_START:
            return{
                ...state,
                smurfs: [],
                isLoading: true,
                error: ''
            };
        case FETCH_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: ''
            };
        case FETCH_FAIL:
            return{
                ...state,
                smurfs: [],
                isLoading: false,
                error: action.payload
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case ADD_SMURF:
            const newSmurf = {
                ...action.payload,
                id: Date.now()
            }
            return{
                ...state,
                smurfs:[...state.smurfs, newSmurf],
                isLoading: false,
                error: ''
            };
        default:
            return state;
    }
};

export default reducer;

