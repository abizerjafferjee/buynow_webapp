import axios from 'axios'
import { SET_STRIPE_CHECKOUT } from '../constants/ActionTypes'
import { serverUrl } from '../constants/Common'


export const setStripeCheckout = (checkoutId) => {
    return {
        type: SET_STRIPE_CHECKOUT,
        payload: {
            checkoutId: checkoutId
        }
    }
}

export function updatePaymentStatus(payment_status, uuid) {
    return axios.patch(`${serverUrl}/api/orders/${uuid}/payment_status/`, {payment_status: payment_status})
}