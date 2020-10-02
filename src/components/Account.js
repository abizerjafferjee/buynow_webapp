import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Message, Loader, Dimmer } from 'semantic-ui-react'
import ReactGA from 'react-ga'

import { requestPasswordReset } from '../actions/Auth'

function Account(props) {

    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');

    const [resetEmail, setResetEmail] = useState('')
    const [resetSuccess, setResetSuccess] = useState(null)

    const [form, setForm] = useState('signin')

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

    function handleSignupOnChange(e) {
        const { name, value } = e.target
        if (name === 'username') {
            setUsername(value)
        } else if (name === 'email') {
            setEmail(value)
        } else if (name === 'signupPassword') {
            setSignupPassword(value)
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value)
        }
    }

    function handleUserSignup(e) {
        e.preventDefault()
        const createUser = {
            username: username,
            email: email,
            password: signupPassword,
            confirmPassword: confirmPassword
        }
        props.userSignupRequest(createUser)
        ReactGA.event({
            'category':'Account',
            'action':'Signup',
            'label':'Button'
        })
    }

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

    const PasswordReset = 
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
                <div className="d-block text-center site-font text-white h5 m-4" style={style} onClick={()=>setForm('signin')}>
                    <u>Sign In</u>
                </div>
            </div>
        </div>

    const Login = 
        <div>
            {
                props.auth.loading && <Dimmer active><Loader /></Dimmer>
            }
            <div className='center-child'>
                {
                    props.auth.error && <Message color='red'>Log in failed, please check your credentials again.</Message>
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
                <div style={style} className="d-block text-center site-font text-white h5 m-4" onClick={()=>setForm('signup')}>
                    <u>Don't have an account?</u>
                </div>
                <div style={style} className="d-block text-center site-font text-white h5 m-4" onClick={()=>setForm('passwordreset')}>
                    <u>Forgot Password</u>
                </div>
            </div>
        </div>

    const SignUp = 
        <div>
            {
                props.signup.loading && <Dimmer active><Loader /></Dimmer>
            }
            <div className='center-child'>
                {
                    props.signup.error && <Message color='red'>A user with that username already exists.</Message>
                }
                {
                    props.signup.success && <Message color='green'>Your account is now available. Sign in to continue.</Message>
                }
                <Form>
                    <label className='h5 site-font'>Username</label>
                    <Form.Input
                        icon='user'
                        iconPosition='left'
                        name='username'
                        value={username}
                        placeholder='Username'
                        onChange={handleSignupOnChange}
                        size="big"
                    />
                    <label className='h5 site-font'>Email</label>
                    <Form.Input
                        icon='mail'
                        iconPosition='left'
                        name='email'
                        value={email}
                        placeholder='E-mail'
                        onChange={handleSignupOnChange}
                        size="big"
                    />
                    <label className='h5 site-font'>Password</label>
                    <Form.Input
                        icon='lock'
                        iconPosition='left'
                        type='password'
                        name='signupPassword'
                        value={signupPassword}
                        placeholder='Password'
                        onChange={handleSignupOnChange}
                        size="big"
                    />
                    <label className='h5 site-font'>Confirm Password</label>
                    <Form.Input
                        icon='lock'
                        iconPosition='left'
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        placeholder='Confirm Password'
                        onChange={handleSignupOnChange}
                        size="big"
                    />
                    <button type="button" className="btn btn-primary site-font" onClick={handleUserSignup}>Sign Up</button>

                </Form>
                <div style={style} className="d-block text-center site-font text-white h5 m-4" onClick={()=>setForm('signin')}>
                    <u>Already have an account?</u>
                </div>
            
            </div>
        </div>

    function getForm() {
        if (form === 'signin') {
            return Login
        } else if (form === 'signup') {
            return SignUp
        } else if (form === 'passwordreset') {
            return PasswordReset
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