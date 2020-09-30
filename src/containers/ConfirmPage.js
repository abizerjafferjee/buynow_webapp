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
            }, 3000)
        })
    }

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

export default Confirm