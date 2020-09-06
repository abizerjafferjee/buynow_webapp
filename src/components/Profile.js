import React from 'react'
import PropTypes from 'prop-types'
import { Divider, Message, Header } from 'semantic-ui-react'
// import _ from 'lodash'

import TicketList from './TicketList'

function Profile(props) {

    function handleUserLogout() {
        props.logout()
    }

    return (
        <div>
            <Header as='h2' inverted dividing>
                TICKETS
            </Header>

            <TicketList tickets={props.tickets} />

            <Divider />
            <div className="d-block text-white h6">
                Logged in as <b>{props.auth.user.username}</b>
                <div className="float-right"
                    onClick={handleUserLogout}>
                    Logout
                </div>
            </div>
        </div>
    )
}

Profile.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    orders: PropTypes.array,
    tickets: PropTypes.array
}

export default Profile