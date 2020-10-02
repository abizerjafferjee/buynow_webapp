import { axiosInstance } from '../constants/Axios'
import { LIVESHOW_REQUEST, LIVESHOW_SUCCESS, LIVESHOW_FAILURE, LIVESHOW_CLEAR } from '../constants/ActionTypes'

export const liveshowRequest = (ticketId) => {
    return {
        type: LIVESHOW_REQUEST,
        payload: ticketId
    }
}

export const liveshowSuccess = (liveshow) => {
    return {
        type: LIVESHOW_SUCCESS,
        payload: liveshow
    }
}

export const liveshowFailure = (error) => {
    return {
        type: LIVESHOW_FAILURE,
        payload: error
    }
}

export const liveshowClear = () => {
    return {
        type: LIVESHOW_CLEAR
    }
}

export const fetchLiveShow = (ticketId) => {
    return dispatch => {
        dispatch(liveshowRequest(ticketId))
        axiosInstance.get(`/api/tickets/${ticketId}/ticket/`)
            .then((res) => {
                dispatch(liveshowSuccess(res.data))
            })
            .catch((err) => {
                dispatch(liveshowFailure(err))
            })
    }
}

export const updateLiveShow = (ticketId) => {
    return dispatch => {
        axiosInstance.patch(`/api/tickets/${ticketId}/ticket/`, {})
        .then((res) => {
            dispatch(liveshowClear())
        })
        .catch((err) => {
        })
    }
}