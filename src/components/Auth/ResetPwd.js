import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Form, Message, Loader, Dimmer } from 'semantic-ui-react'
import ReactGA from 'react-ga'

import { requestPasswordReset } from '../../actions/Auth'

function ResetPwd(props) {

    const [resetEmail, setResetEmail] = useState('')
    const [resetSuccess, setResetSuccess] = useState(null)

    function handleResetForm(e) {
        e.preventDefault()
        requestPasswordReset(resetEmail)
        .then((res) => {
            setResetSuccess(true)
        })
        .catch((err) => {
            setResetSuccess(false)
        })
    }

    const style = {
        cursor: "pointer"
    }

    return (
        <div>
            <div className='center-child'>
                { resetSuccess === true && <Message color='green'>A password reset email has been sent.</Message> }
                { resetSuccess === false && <Message color='red'>Could not send a password reset email.</Message> }
                <Form>
                    <label className='h5 site-font'>E-mail</label>
                    <Form.Input
                        icon='mail'
                        iconPosition='left'
                        name='resetEmail'
                        value={resetEmail}
                        placeholder='E-mail'
                        onChange={(e) => setResetEmail(e.target.value)}
                        error={typeof props.auth.error !== 'undefined'}
                        size="big"
                    />
                    <button type="button" className="btn btn-primary" onClick={handleResetForm}>Reset</button>
                </Form>
                <div className="d-block text-center site-font text-white h5 m-4" style={style} onClick={()=>props.setForm('signin')}>
                    <u>Sign In</u>
                </div>
            </div>
        </div>
    )
}

export default ResetPwd