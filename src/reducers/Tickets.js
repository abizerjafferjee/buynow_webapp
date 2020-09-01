import { FETCH_TICKETS_REQUEST, FETCH_TICKETS_SUCCESS, FETCH_TICKETS_FAILURE } from '../constants/ActionTypes'

const tickets = (state={}, action={}) => {
    switch (action.type) {
        case FETCH_TICKETS_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case FETCH_TICKETS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }

        case FETCH_TICKETS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state

    }
}

export default tickets