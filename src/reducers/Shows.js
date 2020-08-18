import { FETCH_SHOWS_REQUEST, FETCH_SHOWS_SUCCESS, FETCH_SHOWS_FAILURE, FILTER_SHOWS } from '../constants/ActionTypes'

const shows = (state={}, action={}) => {
    switch(action.type) {
        case FETCH_SHOWS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_SHOWS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case FETCH_SHOWS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case FILTER_SHOWS:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export default shows