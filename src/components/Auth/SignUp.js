import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Form, Message, Loader, Dimmer } from 'semantic-ui-react'
import ReactGA from 'react-ga'

function SignUp(props) {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        if (props.signup.success && props.form === 'signup') {
            setTimeout(() => {
                props.clearSignup()
                props.setForm('signin')
            }, 1000)
        } else if (props.signup.error && props.form === 'signup') {
            setTimeout(() => {
                props.clearSignup()
            }, 2000)
        }
    }, [props.signup])

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

    return (
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
                    <button 
                        type="button" 
                        className="btn btn-primary site-font" 
                        onClick={handleUserSignup}>
                        Sign Up
                    </button>

                </Form>
                <div 
                    style={{cursor: "pointer"}} 
                    className="d-block text-center site-font text-white h5 m-4"
                    onClick={()=>props.setForm('signin')}>
                    <u>Already have an account?</u>
                </div>
            
            </div>
        </div>
    )
}

export default SignUp