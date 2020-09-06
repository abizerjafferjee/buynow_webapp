import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Message, Loader, Dimmer } from 'semantic-ui-react'
// import _ from 'lodash'

function Account(props) {

    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showSignIn, setShowSignIn] = useState(true)

    function handleToggleForms() {
        setShowSignIn(!showSignIn)
    }

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
    }

    const Login = 
        <>
            {
                props.auth.loading && <Dimmer active><Loader /></Dimmer>
            }
            <div className='center-child'>
                {
                    props.auth.error && <Message color='red'>Log in failed, please check your credentials again.</Message>
                }
                <Form>
                    <label className='text-white h5'>Username or E-mail</label>
                    <Form.Input
                        icon='user'
                        iconPosition='left'
                        name='usernameOrEmail'
                        value={usernameOrEmail}
                        placeholder='Username or E-mail'
                        onChange={handleLoginOnChange}
                        error={typeof props.auth.error !== 'undefined'}
                        size="big"
                    />
                    <label className='text-white h5'>Password</label>
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
                    <button type="button" className="btn btn-primary" onClick={handleUserLogin}>Sign In</button>
                </Form>
                <a className="d-block text-center text-white h5 m-4" onClick={()=>handleToggleForms()}>
                    <u>Don't have an account?</u>
                </a>
            
            </div>
        </>

    const SignUp = 
        <>
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
                    <label className='text-white h5'>Username</label>
                    <Form.Input
                        icon='user'
                        iconPosition='left'
                        name='username'
                        value={username}
                        placeholder='Username'
                        onChange={handleSignupOnChange}
                        size="big"
                    />
                    <label className='text-white h5'>Email</label>
                    <Form.Input
                        icon='mail'
                        iconPosition='left'
                        name='email'
                        value={email}
                        placeholder='E-mail'
                        onChange={handleSignupOnChange}
                        size="big"
                    />
                    <label className='text-white h5'>Password</label>
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
                    <label className='text-white h5'>Confirm Password</label>
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
                    <button type="button" className="btn btn-primary" onClick={handleUserSignup}>Sign Up</button>

                </Form>
                <a className="d-block text-center text-white h5 m-4" onClick={()=>handleToggleForms()}>
                    <u>Already have an account?</u>
                </a>
            
            </div>
        </>


    return (
        <div className='center'>
        {
            showSignIn ? <>{Login}</> : <>{SignUp}</>
        }
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