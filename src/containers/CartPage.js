import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Header, Loader, Dimmer } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import { withRouter, Link } from 'react-router-dom'
// import toastr from 'toastr'
import { loadStripe } from '@stripe/stripe-js';

import Cart from '../components/Cart'
import { removeFromCart, clearCart, placeOrder, addToCart } from '../actions/Cart'
import { STRIPE_PUBLISHABLE } from '../constants/Stripe'

const stripePromise = loadStripe(STRIPE_PUBLISHABLE);

function CartPage(props) {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if ('checkoutId' in props.stripe) {
            setLoading(false)
            stripeCheckout(props.stripe.checkoutId)
        }
    }, [props.stripe]);

    async function stripeCheckout(checkoutId) {

        const stripe = await stripePromise

        const result = await stripe.redirectToCheckout({
            sessionId: checkoutId,
          });

        setLoading(false)
      
        if (result.error) {
            console.log(result.error)
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
        }
    }

    function handleRemoveItem(e, item) {
        e.stopPropagation()
        props.removeFromCart(item.id)
    }

    function handleAddQuantity(e, item) {
        e.stopPropagation()
        props.addToCart(item.show, 1)
    }

    function handleRemoveQuantity(e, item) {
        e.stopPropagation()
        props.addToCart(item.show, -1)
    }

    function submit() {
        setLoading(true)
        props.placeOrder(props.cart)
        // props.history.push('/')
    }

    const accountPlaceHolder = 
        <div className='center'>
            <a className='center-child' href='#' onClick={() => props.handleTogglePane('account')}>Login to view cart</a>
        </div>

    return (
        <div className="p-2">
        {
            props.auth.isAuthenticated ? 
            <div>
                {
                    loading && <Dimmer active><Loader /></Dimmer>
                }
                <Header as='h2' inverted dividing>
                    CART
                </Header>
                <Cart
                    cart={props.cart}
                    handleRemoveItem={handleRemoveItem}
                    clearCart={props.clearCart}
                    handleAddQuantity={handleAddQuantity}
                    handleRemoveQuantity={handleRemoveQuantity}
                    submit={submit}
                />
            </div>
            : accountPlaceHolder
        }
        </div>
    )
}

CartPage.propTypes = {
    cart: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    clearCart: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    placeOrder: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    handleTogglePane: PropTypes.func.isRequired,
    stripe: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        auth: state.auth,
        stripe: state.stripe
    }
}

export default connect(mapStateToProps, { removeFromCart, clearCart, placeOrder, addToCart })(CartPage)