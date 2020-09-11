import { LIVESHOW_REQUEST, LIVESHOW_SUCCESS, LIVESHOW_FAILURE, LIVESHOW_CLEAR } from '../constants/ActionTypes'

const liveshow = (state={}, action={}) => {
    switch(action.type) {
        case LIVESHOW_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case LIVESHOW_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case LIVESHOW_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case LIVESHOW_CLEAR:
            return {}
        default:
            return state
    }
}

export default liveshow