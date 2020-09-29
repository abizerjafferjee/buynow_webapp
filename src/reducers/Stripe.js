import { SET_STRIPE_CHECKOUT } from '../constants/ActionTypes'

const stripe = (state={}, action={}) => {
    switch(action.type) {
        case SET_STRIPE_CHECKOUT:
            return {
                checkoutId: action.payload.checkoutId
            }
        default:
            return state
    }
}

export default stripe