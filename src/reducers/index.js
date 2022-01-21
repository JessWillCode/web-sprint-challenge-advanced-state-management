import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_SMURF, SET_ERROR } from '../actions';

export const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
}

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
                name: action.payload,
                position: action.payload,
                nickname: action.payload,
                description: action.payload,
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

