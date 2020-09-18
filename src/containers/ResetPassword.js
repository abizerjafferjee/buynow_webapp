import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header, Form, Button, Container, Message } from 'semantic-ui-react'
import axios from 'axios'
import { serverUrl } from '../constants/Common'

function ResetPassword(props) {

    const { token } = useParams()
    const [password, setPassword] = useState('')
    const [resetSuccess, setResetSuccess] = useState(null)

    function handleForm(e) {
        e.preventDefault()
        axios.post(`${serverUrl}/accounts/password_reset/confirm/`, { token: token, password: password })
            .then((res) => {
                setResetSuccess(true)
                setTimeout(() => {
                    props.history.push('/')
                }, 3000)
            })
            .catch((err) => {
                setResetSuccess(false)
            })
    }

    return (
        <Container fluid>
            <center className="p-5">
                <div className="ticket-form-width">
                    { resetSuccess === true && <Message color='green'>A password reset email has been sent.</Message> }
                    { resetSuccess === false && <Message color='red'>Could not send a password reset email.</Message> }
                    <div className='text-white h2 p-3'>Reset Your Password</div>
                    <Form>
                        <Form.Input
                            icon='lock'
                            iconPosition='left'
                            name='password'
                            type='password'
                            value={password}
                            placeholder='Enter your new password'
                            onChange={(e) => setPassword(e.target.value)}
                            size="big"
                        />
                        <Button primary type='submit' onClick={handleForm}>Change Password</Button>
                    </Form>
                </div>
            </center>
        </Container>
    )
}

export default ResetPassword