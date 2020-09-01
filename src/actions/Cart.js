import axios from 'axios'
import _ from 'lodash'
import toastr from 'toastr'

import { setStripeCheckout } from './Stripe'
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../constants/ActionTypes'

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

        axios.post('/shows/order/', {shows: showsArr, quantities: quantitiesArr, prices: pricesArr, total_price: totalPrice.toFixed(2)})
            .then((res) => {
                const orderId = res.data.id
                const checkoutId = res.data.stripe_session.id
                localStorage.setItem('orderId', orderId)
                dispatch(setStripeCheckout(checkoutId))
            })
        
            // dispatch(clearCart())
    }
}