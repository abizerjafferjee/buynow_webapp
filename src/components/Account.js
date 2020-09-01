import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Segment, Button, Divider, Modal, Message, Header, Image, Card, Grid, Loader } from 'semantic-ui-react'
import _ from 'lodash'

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

    return (
        <div className='center'>
            <div className='center-child'>
            {
                props.auth.loading && <Loader active />
            }
            {
                props.auth.error && <Message color='red'>Log in failed, please check your credentials again.</Message>
            }
            <Card>
                <Card.Content>
                    {
                        showSignIn ?
                        <Form>
                            <Form.Input
                                icon='user'
                                iconPosition='left'
                                name='usernameOrEmail'
                                value={usernameOrEmail}
                                label='Username or E-mail'
                                placeholder='Username or E-mail'
                                onChange={handleLoginOnChange}
                                error={typeof props.auth.error !== 'undefined'}
                            />
                            <Form.Input
                                icon='lock'
                                iconPosition='left'
                                label='Password'
                                type='password'
                                name='password'
                                value={password}
                                placeholder='Password'
                                onChange={handleLoginOnChange}
                                error={typeof props.auth.error !== 'undefined'}
                            />

                            <Button
                                primary={true}
                                onClick={handleUserLogin}
                                content='Sign in'
                                icon='sign-in'
                                labelPosition='right'
                            />
                        </Form>
                        :
                        <Form>
                            <Form.Input
                                icon='user'
                                iconPosition='left'
                                name='username'
                                value={username}
                                label='Username'
                                placeholder='Username'
                                onChange={handleSignupOnChange}
                            />

                            <Form.Input
                                icon='mail'
                                iconPosition='left'
                                name='email'
                                value={email}
                                label='E-mail'
                                placeholder='E-mail'
                                onChange={handleSignupOnChange}
                            />

                            <Form.Input
                                icon='lock'
                                iconPosition='left'
                                type='password'
                                name='signupPassword'
                                value={signupPassword}
                                label='Password'
                                placeholder='Password'
                                onChange={handleSignupOnChange}
                            />

                            <Form.Input
                                icon='lock'
                                iconPosition='left'
                                type='password'
                                name='confirmPassword'
                                value={confirmPassword}
                                label='Confirm password'
                                placeholder='Confirm password'
                                onChange={handleSignupOnChange}
                            />

                            <Button
                                primary={true}
                                content='Sign up'
                                icon='signup'
                                labelPosition='right'
                                onClick={handleUserSignup}
                            />

                        </Form>
                    }
                </Card.Content>
            </Card>

            {
                showSignIn ? 
                <a href='#' onClick={()=>handleToggleForms()}>Don't have an account?</a>
                : <a href='#' onClick={()=>handleToggleForms()}>Sign In</a>
            }
            
            </div>

        </div>

    )
}

Account.propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    userSignupRequest: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

export default Account