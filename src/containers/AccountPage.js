import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'

import Account from '../components/Account'
import { login, logout, userSignupRequest } from '../actions/Auth'

function AccountPage(props) {
    return (
        <Account
            login={props.login}
            logout={props.logout}
            userSignupRequest={props.userSignupRequest}
            auth={props.auth}
        />
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth
    }
}

Account.propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    userSignupRequest: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}


export default connect(mapStateToProps, { login, logout, userSignupRequest})(AccountPage)