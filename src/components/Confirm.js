import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header, Loader, Container, Grid } from 'semantic-ui-react'

import { updatePaymentStatus, clearStripe } from '../actions/Stripe'

function Confirm(props) {

    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('')

    const {status, id} = useParams()
    const orderId = localStorage.getItem('orderId')

    useEffect(() => {
        if (orderId !== null) {
            if (status === 'confirm') {
                props.updatePaymentStatus(orderId, 2)
            } else if (status === 'cancel') {
                props.updatePaymentStatus(orderId, 3)
                setTimeout(() => {
                    props.history.push('/')
                }, 3000)
            }
        }
    }, []);

    useEffect(() => {
        if ('status' in props.stripe) {
            if (props.stripe.status === true) {
                setLoading(false)
                props.clearStripe()
                setTimeout(() => {
                    props.history.push('/')
                }, 5000)
            } else if (props.stripe.status === false) {
                props.clearStripe()
                setLoading(false)
                setErrorMessage('Something went wrong on our side. Please contact support to get it resolved. Sorry for the inconvenience.')
            }
        }
    }, [props.stripe])

    const messageDiv = () => {
        if (errorMessage === '') {
            return <Header size="medium" inverted>Your purchase is complete. We'll email you your live show links. You can also find them in your profile.</Header>
        } else {
            return <Header size="medium" color="yellow">{errorMessage}</Header>
        }
    }

    const confirmDiv = () => {
        if (loading) {
            return <Header size="medium" inverted>Processing your tickets now</Header>
        } else {
            return messageDiv()
        }
    }
    
    return (
        <Container className='p-5' textAlign='center'>
            <Grid centered>
            <Grid.Row>
            {
                loading && <Loader active /> 
            }
            </Grid.Row>
            <Grid.Row>
            {
                status === 'confirm' ?
                confirmDiv() :
                <Header size="medium" inverted>We're cancelling your order...</Header>
            }
            </Grid.Row>
            </Grid>
        </Container>
    )
}

Confirm.propTypes = {
    stripe: PropTypes.object.isRequired,
    updatePaymentStatus: PropTypes.func.isRequired,
    clearStripe: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        stripe: state.stripe
    }
}

export default connect(mapStateToProps, { updatePaymentStatus, clearStripe })(Confirm)