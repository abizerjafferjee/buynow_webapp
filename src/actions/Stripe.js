import axios from 'axios'

import { SET_STRIPE_CHECKOUT, SET_PAYMENT_STATUS, CLEAR_STRIPE } from '../constants/ActionTypes'
import { clearCart } from './Cart'

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
        axios.patch(`/shows/order/${orderId}/`, {payment_status: payment_status})
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

// export const deleteOrder = (orderId) => {
//     return dispatch => {
//         axios.patch(`/shows/order/${orderId}/`, {payment_status: 2})
//             .then((res) => {
//                 console.log('successful')
//             })
//             .catch((err) => {
//                 console.log(err)
//                 console.log('something went wrong on our side. please contact support to get it resolved. Sorry for the inconvenience.')
//             })
//     }
// }