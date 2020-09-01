import axios from 'axios'
import toastr from 'toastr'

import { FETCH_TICKETS_REQUEST, FETCH_TICKETS_SUCCESS, FETCH_TICKETS_FAILURE } from '../constants/ActionTypes'
import { TOASTR_OPTIONS } from '../constants/Common'
toastr.options = TOASTR_OPTIONS

export const fetchTicketsRequest = () => {
    return {
        type: FETCH_TICKETS_REQUEST
    }
}

export const fetchTicketsSuccess = (orders) => {
    return {
        type: FETCH_TICKETS_SUCCESS,
        payload: orders
    }
}

export const fetchTicketsFailure = (error) => {
    return {
        type: FETCH_TICKETS_FAILURE,
        payload: error
    }
}

export const fetchTickets = () => {
    return dispatch => {
        dispatch(fetchTicketsRequest())
        axios.get('/shows/ticket/')
            .then((res) => {
                dispatch(fetchTicketsSuccess(res.data))
            })
            .catch((err) => {
                dispatch(fetchTicketsFailure(err))
            })
    }
}