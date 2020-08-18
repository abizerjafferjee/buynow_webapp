import axios from 'axios'
import _ from 'lodash'
import toastr from 'toastr'

import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../constants/ActionTypes'
import { clearBillingOptions } from './Billing'

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

export const placeOrder = (items, billingData) => {
    return dispatch => {
        let totalPrice = 0
        let showsArr = []
        let quantitiesArr = []

        _.forEach(items, (element) => {
            totalPrice += element.show.show_price * element.quantity
            showsArr.push(element.show.title)
            quantitiesArr.push(element.quantity)
        })

        axios.post('/shows/order/', {shows: showsArr, quantities: quantitiesArr, total_price: totalPrice.toFixed(2), payment_method: billingData})
            .then((res) => {
                console.log("Placing order successfully")
            })
        
            dispatch(clearCart())

            dispatch(clearBillingOptions())
    }
}