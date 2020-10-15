import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Form, Message, Loader, Dimmer } from 'semantic-ui-react'
import ReactGA from 'react-ga'

import SignUp from './Auth/SignUp'
import Login from './Auth/Login'
import ResetPwd from './Auth/ResetPwd'

function Account(props) {

    const [form, setForm] = useState('signin')

    function getForm() {
        if (form === 'signin') {
            return <Login
                        auth={props.auth}
                        login={props.login}
                        setForm={setForm}
                        form={form}
                        setPaneOpen={props.setPaneOpen}
                        loginReset={props.loginReset}
                    />

        } else if (form === 'signup') {
            return <SignUp
                        userSignupRequest={props.userSignupRequest}
                        clearSignup={props.clearSignup}
                        signup={props.signup}
                        setForm={setForm}
                        form={form}
                    />

        } else if (form === 'passwordreset') {
            return <ResetPwd
                        auth={props.auth}
                        setForm={setForm}
                        form={form}
                    />
        }
    }

    return (
        <div className="mt-5 pt-5">
        { getForm() }
        </div>
    )
}

Account.propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    userSignupRequest: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    signup: PropTypes.object
}

export default Account