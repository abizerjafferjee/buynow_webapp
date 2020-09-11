import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../constants/ActionTypes'

const initialState = {}

const signup = (state=initialState, action={}) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...initialState,
                loading: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...initialState,
                success: true
            }
        case SIGNUP_FAILURE:
            return {
                ...initialState,
                error: action.payload
            }
        default:
            return state
    }
}

export default signup