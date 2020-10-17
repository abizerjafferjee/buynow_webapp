import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { Loader, Container, Grid } from 'semantic-ui-react'

import axios from 'axios'

import { updatePaymentStatus } from '../actions/Stripe'

function Confirm(props) {

    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('')
    const {status, uuid} = useParams()

    useEffect(() => {
        if (!loading || props.stripe.loading === undefined) {
            if (status !== undefined && uuid !== undefined) {
                if (status === 'confirm') {
                    props.updatePaymentStatus(2, uuid)
                } else if (status === 'cancel') {
                    props.updatePaymentStatus(3, uuid)
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status, uuid]);

    useEffect(() => {
        if (props.stripe.loading !== undefined) {
            setLoading(true)
        }
        if ('success' in props.stripe) {
            if (props.stripe.success) {
                setLoading(false)
                setTimeout(() => {
                    props.history.push('/')
                }, 5000)
            } else {
                setErrorMessage(props.stripe.error)
                setTimeout(() => {
                    props.history.push('/')
                }, 5000)
            }
        }
    }, [props.stripe]);

    const confirmDiv = () => {
        if (loading) {
            return <p className="h2 site-font">Processing your tickets now...</p>
        } else {
            if (errorMessage === '') {
                return (
                    <div>
                        <p className="h2 site-font">
                            Thank you for supporting performers through Odiance.
                        </p>
                        <p className="h3 site-font">
                            You will receive an email with your concert tickets shortly.
                        </p>
                        {/* <p className="h4 site-font">We are redirecting you to the home page...</p> */}
                    </div>
                    )
            } else {
                return <p className="h4 site-font text-warning">{errorMessage}</p>
            }
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
                status !== 'confirm' ?
                <div>
                    <p className="h2 site-font">We're cancelling your order.</p>
                </div> :
                confirmDiv()
            }
            </Grid.Row>
            </Grid>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        stripe: state.stripe
    }
}

export default connect(mapStateToProps, { updatePaymentStatus })(Confirm)