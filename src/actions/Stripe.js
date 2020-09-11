import axios from 'axios'

import { SET_STRIPE_CHECKOUT, SET_PAYMENT_STATUS, CLEAR_STRIPE } from '../constants/ActionTypes'
import { clearCart } from './Cart'
import { serverUrl } from '../constants/Common'

export const setStripeCheckout = (checkoutId) => {
    return {
        type: SET_STRIPE_CHECKOUT,
        payload: {
            checkoutId: checkoutId
        }
    }
}

export const stripePaymentStatus = (status) => {
    return {
        type: SET_PAYMENT_STATUS,
        payload: status
    }
}

export const clearStripe = () => {
    localStorage.removeItem('orderId')
    return {
        type: CLEAR_STRIPE
    }
}

export const updatePaymentStatus = (orderId, payment_status) => {
    return dispatch => {
        axios.patch(`${serverUrl}/api/orders/${orderId}/`, {payment_status: payment_status})
            .then((res) => {
                if (payment_status === 2) {
                    dispatch(stripePaymentStatus(true))
                } else if (payment_status === 3) {
                    dispatch(clearStripe())
                }
            })
            .catch((err) => {
                if (payment_status === 2) {
                    dispatch(stripePaymentStatus(false))
                } else {
                    console.log('something went wrong...update the status of order to cancelled')
                }
            })
    }
}