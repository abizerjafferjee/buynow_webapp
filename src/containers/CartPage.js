import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Step, Icon, Grid, Segment, Button, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import toastr from 'toastr'

import Cart from '../components/Cart'
import Billing from '../components/Billing'
import Confirmation from '../components/Confirmation'
import { removeFromCart, clearCart, placeOrder } from '../actions/Cart'
import { setBillingOptions } from '../actions/Billing'

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

    function submit() {
        props.placeOrder(props.cart, props.billing.data)
        props.history.push('/')
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
            case 2:
                return <Billing
                            billing={props.billing}
                            nextStep={nextStep}
                            previousStep={previousStep}
                            setBillingOptions={props.setBillingOptions}
                        />

            case 3:
                return <Confirmation
                            cart={props.cart}
                            billing={props.billing}
                            previousStep={previousStep}
                            submit={submit}
                        />
            default:
                return
        }
    }

    const accountPlaceHolder = 
        <Grid columns='equal'>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column width={8}>
                <Segment placeholder>
                    <Header icon>
                    <Icon name='user' />
                        Create an account to buy a ticket.
                    </Header>
                    <Segment.Inline>
                    <Button primary as={Link} to='/account'>Account</Button>
                    </Segment.Inline>
                </Segment>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
        </Grid>

    return (
        <>
        {
            props.auth.isAuthenticated ? 
            <div>
                <Step.Group attached='top'>
                    <Step active={step === 1}>
                        <Icon name='shopping cart' />
                        <Step.Content>
                            <Step.Title>Confirm items</Step.Title>
                        </Step.Content>
                    </Step>

                    <Step active={step === 2}>
                        <Icon name='payment' />
                        <Step.Content>
                            <Step.Title>Billing</Step.Title>
                            <Step.Description>Enter billing information</Step.Description>
                        </Step.Content>
                    </Step>

                    <Step active={step === 3}>
                        <Icon name='info circle' />
                        <Step.Content>
                            <Step.Title>Confirm Order</Step.Title>
                            <Step.Description>Verify order details</Step.Description>
                        </Step.Content>
                    </Step>
                </Step.Group>

                {showStep()}
            </div>
            : accountPlaceHolder
        }
        </>
    )
}

CartPage.propTypes = {
    cart: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    clearCart: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    setBillingOptions: PropTypes.func.isRequired,
    placeOrder: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        auth: state.auth,
        billing: state.billing
    }
}

export default connect(mapStateToProps, { removeFromCart, clearCart, setBillingOptions, placeOrder })(CartPage)