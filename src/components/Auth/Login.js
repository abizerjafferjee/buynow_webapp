import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Form, Message, Loader, Dimmer } from 'semantic-ui-react'
import ReactGA from 'react-ga'

import { loginReset } from '../../actions/Auth'

function Login(props) {

    const [usernameOrEmail, setUsernameOrEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showError, setShowError] = useState(false)

    useEffect(() => {
        if (props.auth.error) {
            setShowError(true)
            props.loginReset()
            setTimeout(() => {
                setShowError(false)
            }, 2000)
        }
    }, [props.auth]);

    function handleLoginOnChange(e) {
        const { name, value } = e.target
        if (name === 'usernameOrEmail') {
            setUsernameOrEmail(value)
        } else if (name === 'password') {
            setPassword(value)
        }
    }

    function handleUserLogin(e) {
        e.preventDefault()
        props.login(usernameOrEmail, password)
        ReactGA.event({
            'category':'Account',
            'action':'Login',
            'label':'Button'
        })
    }

    const style = {
        cursor: "pointer"
    }

    return (
        <div>
            {
                props.auth.loading && <Dimmer active><Loader /></Dimmer>
            }
            <div className='center-child'>
                {
                    showError && <Message color='red'>Log in failed, please check your credentials again.</Message>
                }
                <Form>
                    <label className='h5 site-font'>Username</label>
                    <Form.Input
                        icon='user'
                        iconPosition='left'
                        name='usernameOrEmail'
                        value={usernameOrEmail}
                        placeholder='Username'
                        onChange={handleLoginOnChange}
                        error={typeof props.auth.error !== 'undefined'}
                        size="big"
                    />
                    <label className='h5 site-font'>Password</label>
                    <Form.Input
                        icon='lock'
                        iconPosition='left'
                        type='password'
                        name='password'
                        value={password}
                        placeholder='Password'
                        onChange={handleLoginOnChange}
                        error={typeof props.auth.error !== 'undefined'}
                        size="big"
                    />
                    <button type="button" className="btn btn-primary site-font" onClick={handleUserLogin}>Sign In</button>
                </Form>
                <div style={style} className="d-block text-center site-font text-white h5 m-4" onClick={()=>props.setForm('signup')}>
                    <u>Don't have an account?</u>
                </div>
                <div style={style} className="d-block text-center site-font text-white h5 m-4" onClick={()=>props.setForm('passwordreset')}>
                    <u>Forgot Password</u>
                </div>
            </div>
        </div>
    )
}

export default Login