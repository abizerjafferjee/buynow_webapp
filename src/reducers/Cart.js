import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, STRIPE_CHECKOUT } from '../constants/ActionTypes'
import shortid from 'shortid'
import _ from 'lodash'

const cart = (state=[], action={}) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (_.filter(state, (obj) => obj.show.title === action.payload.show.title).length > 0) {
                let newState = state.slice()
                for (let i=0; i<newState.length; i++) {
                    if (newState[i].show.title === action.payload.show.title) {
                        if (action.payload.quantity < 0 && newState[i].quantity == 1) {
                            continue
                        }
                        newState[i].quantity += action.payload.quantity
                    }
                }

                return newState
            }

            return [
                ...state,
                {
                    id: shortid.generate(),
                    show: action.payload.show,
                    quantity: action.payload.quantity
                }
            ]
        
        case REMOVE_FROM_CART:
            var idx = _.findIndex(state, { id: action.payload.id })
            if (idx >= 0) {
                return [
                    ...state.slice(0, idx),
                    ...state.slice(idx + 1)
                ]
            }

            return state

        case CLEAR_CART:
            return []
        
        default:
            return state
    }
}

export default cart