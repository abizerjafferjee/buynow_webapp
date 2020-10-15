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
        if (status !== undefined && uuid !== undefined) {
            if (status === 'confirm') {
                updatePayment(2, uuid)
            } else if (status === 'cancel') {
                updatePayment(3, uuid)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function updatePayment(payment_status, uuid) {
        updatePaymentStatus(payment_status, uuid)
        .then((res) => {
            setLoading(false)
            setTimeout(() => {
                props.history.push('/')
            }, 5000)
        })
        .catch((err) => {
            setLoading(false)
            if (err.response.status === 403) {
                setErrorMessage('This order has already been completed. If your payment was confirmed then you should have received tickets on your email. Please contact support if you still need help.')
            } else {
                setErrorMessage('Something went wrong on our side. Please contact support to get it resolved. Sorry for the inconvenience.')
            }
            setTimeout(() => {
                props.history.push('/')
            }, 5000)
        })
    }

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

export default Confirm