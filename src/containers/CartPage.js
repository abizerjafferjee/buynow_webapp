import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Loader, Dimmer, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loadStripe } from '@stripe/stripe-js';
import ReactGA from 'react-ga'

import Cart from '../components/Cart'
import { removeFromCart, clearCart, placeOrder, addToCart } from '../actions/Cart'
import { setPanelComponent } from '../actions/Panel'
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

    function submit() {
        setLoading(true)
        props.placeOrder(props.cart)
        ReactGA.event({
            'category':'Cart',
            'action':'Buy Tickets',
            'label':'Button'
        })
    }

    const notAuthenticatedMessage = 
        <div className="mt-5 pt-5">
            <div 
                className="h4 site-font center-child " 
                style={{cursor:'pointer'}} 
                onClick={() => props.setPanelComponent('account')}>
                Login to view cart
            </div>
        </div>

    return (
        <div className="p-2">
        {
            !props.auth.isAuthenticated ? 
            notAuthenticatedMessage :
            <div>
                { loading && <Dimmer active><Loader /></Dimmer> }
                <div className="h2 site-font text-white">
                    CART
                </div>
                <Divider />
                <Cart
                    cart={props.cart}
                    clearCart={props.clearCart}
                    addToCart={props.addToCart}
                    removeFromCart={props.removeFromCart}
                    submit={submit}
                    setPaneOpen={props.setPaneOpen}
                />
            </div>
        }
        </div>
    )
}

CartPage.propTypes = {
    cart: PropTypes.array.isRequired,
    auth: PropTypes.object.isRequired,
    stripe: PropTypes.object.isRequired,
    clearCart: PropTypes.func.isRequired,
    placeOrder: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        auth: state.auth,
        stripe: state.stripe
    }
}

export default connect(mapStateToProps, { removeFromCart, clearCart, placeOrder, addToCart, setPanelComponent })(CartPage)