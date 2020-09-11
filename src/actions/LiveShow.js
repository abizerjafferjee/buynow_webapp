import axios from 'axios'
import { LIVESHOW_REQUEST, LIVESHOW_SUCCESS, LIVESHOW_FAILURE, LIVESHOW_CLEAR } from '../constants/ActionTypes'
import { serverUrl } from '../constants/Common'

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
        axios.get(`${serverUrl}/api/tickets/${ticketId}/ticket/`)
            .then((res) => {
                dispatch(liveshowSuccess(res.data))
                localStorage.setItem('liveshowId', res.data.uuid)
            })
            .catch((err) => {
                dispatch(liveshowFailure(err))
            })
    }
}

export const updateLiveShow = (ticketId, active) => {
    axios.patch(`${serverUrl}/api/tickets/${ticketId}/ticket/`, {active: active})
}

export const clearLiveShow = () => {
    return dispatch => {
        localStorage.removeItem('liveshowId')
        dispatch(liveshowClear())
    }
}