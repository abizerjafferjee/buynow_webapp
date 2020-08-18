import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Step, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import toastr from 'toastr'

import Cart from '../components/Cart'
import { removeFromCart, clearCart } from '../actions/Cart'

function CartPage(props) {

    const [step, setStep] = useState(1)

    function nextStep() {
        setStep(step+1)
    }

    function previousStep() {
        setStep(step-1)
    }

    function handleRemoveItem(e, item) {
        e.stopPropagation()
        props.removeFromCart(item.id)
    }

    function showStep() {
        switch (step) {
            case 1:
                return <Cart
                            cart={props.cart}
                            nextStep={nextStep}
                            handleRemoveItem={handleRemoveItem}
                            clearCart={props.clearCart}
                        />
            default:
                return
        }
    }

    return (
        <div>
            {
                localStorage.jwtToken ? 
                showStep()
                : <div><Link to='/account'>Login</Link></div>
            }
        </div>
    )
}

CartPage.propTypes = {
    cart: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    clearCart: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        auth: state.auth
    }
}

export default connect(mapStateToProps, { removeFromCart, clearCart })(CartPage)