import jwtDecode from 'jwt-decode'

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_RESET, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, CLEAR_SIGNUP } from '../constants/ActionTypes'
import { axiosInstance } from '../constants/Axios'

export const loginRequest = (username) => {
    return {
        type: LOGIN_REQUEST,
        payload: username
    }
}

export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

export const loginReset = () => {
    return dispatch => {
        dispatch({
            type: LOGIN_RESET
        })
    }
}

export const setAuthorizationToken = (token) => {
    if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = `JWT ${token}`
    } else {
        delete axiosInstance.defaults.headers.common['Authorization']
    }
}

export const renewAuthorizationToken = (token) => {
    return dispatch => {
        axiosInstance.post(`/accounts/accounts-token-refresh/`, { token })
    }
}

export const login = (username, password) => {

    return dispatch => {
        dispatch(loginRequest(username))
        axiosInstance.post(`/accounts/accounts-token-auth/`, {username, password})
            .then((response) => {
                let token = response.data.token
                localStorage.setItem('jwtToken', token)
                setAuthorizationToken(token)
                dispatch(loginSuccess(jwtDecode(token)))
                console.log('login successful')
            })
            .catch((error) => {
                dispatch(loginFailure(error.response))
                // if (error.response.status === 400 && error.response.data.non_field_errors[0] === 'Unable to log in with provided credentials.') {
                //     console.log("Log in failed, please check your credentials again.")
                // }
            })
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('jwtToken')
        setAuthorizationToken(false)
        dispatch(loginSuccess({}))
    }
}

export const checkAuthorizationToken = (token) => {
    return dispatch => {
        axiosInstance.post(`/accounts/accounts-token-verify/`, { token })
            .then((res) => {
                // dispatch(renewAuthorizationToken(res.data.token))
            })
            .catch((error) => {
                if (error.response !== undefined) {
                    if (error.response.status === 400 && error.response.data.non_field_errors[0] === 'Signature has expired.') {
                        dispatch(logout())
                    }
                }
            })
    }
}

export const signUpRequest = () => {
    return {
        type: SIGNUP_REQUEST
    }
}

export const signupSuccess = () => {
    return {
        type: SIGNUP_SUCCESS
    }
}

export const signupFailure = (error) => {
    return {
        type: SIGNUP_FAILURE,
        payload: error
    }
}

export const clearSignup = () => {
    return dispatch => {
        dispatch({
            type: CLEAR_SIGNUP
        })
    }
}

export const userSignupRequest = (userInfo) => {
    return dispatch => {
        dispatch(signUpRequest())
        axiosInstance.post(`/accounts/users/`, userInfo)
        .then((res) => {
            dispatch(signupSuccess())
        })
        .catch((error) => {
            dispatch(signupFailure(error.response))
            // if (error.response.status === 400 && error.response.data.username[0] === 'A user with that username already exists.') {
            //     console.log('A user with that username already exists.')
            // }
        })
    }
}

export const requestPasswordReset = (resetEmail) => {
    return axiosInstance.post(`/accounts/password_reset/reset_password/`, { email: resetEmail })
}