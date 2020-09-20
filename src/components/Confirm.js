import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Loader, Container, Grid } from 'semantic-ui-react'

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.stripe])

    const messageDiv = () => {
        if (errorMessage === '') {
            return (
                <div>
                    <div className="h1 site-font">Thank You!</div>
                    <div className="h2 site-font">
                        For supporting artists and performers through Odiance.
                        <br></br>
                        Enjoy the show.
                    </div>
                    <br></br>
                    <div className="h5 site-font">
                        You will receive an email shortly that is both your receipt and will
                        include your unique links for each ticket you have purchased for this
                        performance.
                    </div>
                    <div className="h2 site-font">We are redirecting you to the home page...</div>
                </div>
                )
        } else {
            return <div className="h4 site-font text-warning">{errorMessage}</div>
        }
    }

    const confirmDiv = () => {
        if (loading) {
            return <div className="h2 site-font">Processing your tickets now</div>
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
                <div>
                    <div className="h2 site-font">We're cancelling your order.</div>
                    <div className="h5 site-font">We are redirecting you to the home page...</div>
                </div>
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