import axios from 'axios'
import toastr from 'toastr'

import { FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILURE } from '../constants/ActionTypes'
import { TOASTR_OPTIONS } from '../constants/Common'
toastr.options = TOASTR_OPTIONS

export const fetchOrdersRequest = () => {
    return {
        type: FETCH_ORDERS_REQUEST
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: FETCH_ORDERS_SUCCESS,
        payload: orders
    }
}

export const fetchOrdersFailure = (error) => {
    return {
        type: FETCH_ORDERS_FAILURE,
        payload: error
    }
}

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersRequest())
        axios.get('/shows/order/')
            .then((res) => {
                dispatch(fetchOrdersSuccess(res.data))
            })
            .catch((err) => {
                dispatch(fetchOrdersFailure(err))
            })
    }
}