import { SET_STRIPE_CHECKOUT } from '../constants/ActionTypes'
import { axiosInstance } from '../constants/Axios'


export const setStripeCheckout = (checkoutId) => {
    return {
        type: SET_STRIPE_CHECKOUT,
        payload: {
            checkoutId: checkoutId
        }
    }
}

export function updatePaymentStatus(payment_status, uuid) {
    return axiosInstance.patch(`/api/orders/${uuid}/payment_status/`, {payment_status: payment_status})
}