import axios from 'axios'
import jwtDecode from 'jwt-decode'

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/ActionTypes'
import { fetchShows } from './Shows'
import { serverUrl } from '../constants/Common'

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

export const setAuthorizationToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `JWT ${token}`
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export const renewAuthorizationToken = (token) => {
    return dispatch => {
        axios.post(`${serverUrl}/accounts/accounts-token-refresh/`, { token })
    }
}

export const login = (username, password) => {

    return dispatch => {
        dispatch(loginRequest(username))
        axios.post(`${serverUrl}/accounts/accounts-token-auth/`, {username, password})
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
        axios.post(`${serverUrl}/accounts/accounts-token-verify/`, { token })
            .then((res) => {
                dispatch(renewAuthorizationToken(res.data.token))
            })
            .catch((error) => {
                if (error.response.status === 400 && error.response.data.non_field_errors[0] === 'Signature has expired.') {
                    dispatch(logout())
                    dispatch(fetchShows())
                }
            })
    }
}

export const userSignupRequest = (userInfo) => {
    return dispatch => {
        axios.post(`${serverUrl}/accounts/users/`, userInfo)
        .then((res) => {
            console.log('Welcome! Your account is available now.')
        })
        .catch((error) => {
            if (error.response.status === 400 && error.response.data.username[0] === 'A user with that username already exists.') {
                console.log('A user with that username already exists.')
            }
        })
    }
}