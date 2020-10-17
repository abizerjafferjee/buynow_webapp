import { SET_STRIPE_CHECKOUT } from '../constants/ActionTypes'

const stripe = (state={}, action={}) => {
    switch(action.type) {
        case SET_STRIPE_CHECKOUT:
            return {
                checkoutId: action.payload.checkoutId
            }
        case 'SET_STRIPE_CONFIRM_LOADING':
            return {
                loading: true
            }
        case 'SET_STRIPE_CONFIRM':
            return {
                success: true
            }
        case 'SET_STRIPE_ERROR':
            return {
                success: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default stripe