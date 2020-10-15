import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from 'semantic-ui-react'
// import _ from 'lodash'

import TicketList from './TicketList'

function Profile(props) {

    function handleUserLogout() {
        props.logout()
    }

    return (
        <div>
            <div className="h2 site-font text-white">
                TICKETS
            </div>

            <Divider />

            <TicketList 
                tickets={props.tickets}
                setPaneOpen={props.setPaneOpen}
            />

            <Divider />
            <div className="d-block text-white h5 site-font">
                Logged in as <b>{props.auth.user.username}</b>
                <div className="float-right"
                    onClick={handleUserLogout}
                    style={{cursor:"pointer"}}>
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