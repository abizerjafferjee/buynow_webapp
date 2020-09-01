import { SET_STRIPE_CHECKOUT, SET_PAYMENT_STATUS, CLEAR_STRIPE } from '../constants/ActionTypes'

const stripe = (state={}, action={}) => {
    switch(action.type) {
        case SET_STRIPE_CHECKOUT:
            return {
                checkoutId: action.payload.checkoutId
            }
        case SET_PAYMENT_STATUS:
            return {
                status: action.payload
            }
        case CLEAR_STRIPE:
            return {}
        default:
            return state
    }
}

export default stripe