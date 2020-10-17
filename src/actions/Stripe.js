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

const setStripeConfirmLoading = () => {
    return {
        type: 'SET_STRIPE_CONFIRM_LOADING'
    }
}

const setStripeConfirm = () => {
    return {
        type: 'SET_STRIPE_CONFIRM'
    }
}

const setStripeError = (error) => {
    return {
        type: 'SET_STRIPE_ERROR',
        error: error
    }
} 

export function updatePaymentStatus(payment_status, uuid) {
    return dispatch => {
        dispatch(setStripeConfirmLoading())
        axiosInstance.patch(`/api/orders/${uuid}/payment_status/`, {payment_status: payment_status})
        .then((res) => {
            dispatch(setStripeConfirm())
        })
        .catch((err) => {
            if (err.response.status === 403) {
                dispatch(setStripeError('This order has already been completed. If your payment was confirmed then you should have received tickets on your email. Please contact support if you still need help.'))
            } else {
                dispatch(setStripeError('Something went wrong on our side. Please contact support to get it resolved. Sorry for the inconvenience.'))
            }
        })
    }
}