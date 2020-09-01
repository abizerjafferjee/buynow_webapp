import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'

import Account from '../components/Account'
import Profile from '../components/Profile'
import { login, logout, userSignupRequest } from '../actions/Auth'
import { fetchOrders } from '../actions/Account'
import { fetchTickets } from '../actions/Tickets'

function AccountPage(props) {

    useEffect(() => {
        if (props.auth.isAuthenticated) {
            props.fetchOrders()
            props.fetchTickets()
        }
    }, [props.auth])

    return (
        <>
        {
            props.auth.isAuthenticated ? 
            <Profile
                auth={props.auth}
                logout={props.logout}
                history={props.history}
                orders={props.orders}
                tickets={props.tickets}
            />
            : <Account
                login={props.login}
                logout={props.logout}
                userSignupRequest={props.userSignupRequest}
                auth={props.auth}
            />
        }
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth,
        orders: state.account.data,
        tickets: state.tickets.data
    }
}

AccountPage.propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    userSignupRequest: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    orders: PropTypes.array,
    fetchOrders: PropTypes.func.isRequired,
    tickets: PropTypes.array,
    fetchTickets: PropTypes.func.isRequired
}


export default connect(mapStateToProps, { login, logout, userSignupRequest, fetchOrders, fetchTickets})(AccountPage)