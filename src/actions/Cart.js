import _ from 'lodash'
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../constants/ActionTypes'
import { axiosInstance } from '../constants/Axios'
import { setStripeCheckout } from './Stripe'

export const addToCart = (show, quantity) => {
    return {
        type: ADD_TO_CART,
        payload: {
            show: show,
            quantity: quantity
        }
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            id: id
        }
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}

export const placeOrder = (items) => {
    return dispatch => {
        let totalPrice = 0
        let showsArr = []
        let pricesArr = []
        let quantitiesArr = []

        _.forEach(items, (element) => {
            totalPrice += element.show.show_price * element.quantity
            showsArr.push(element.show.title)
            pricesArr.push(element.show.show_price)
            quantitiesArr.push(element.quantity)
        })

        axiosInstance.post(`/api/orders/`, {shows: showsArr, quantities: quantitiesArr, prices: pricesArr, total_price: totalPrice.toFixed(2)})
            .then((res) => {
                const orderId = res.data.id
                const checkoutId = res.data.stripe_session.id
                dispatch(setStripeCheckout(checkoutId))
            })
        
            // dispatch(clearCart())
    }
}