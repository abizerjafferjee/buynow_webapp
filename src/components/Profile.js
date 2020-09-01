import React from 'react'
import PropTypes from 'prop-types'
import { Form, Segment, Button, Divider, Modal, Message, Header, Image, Item } from 'semantic-ui-react'
import _ from 'lodash'

import OrderList from './OrderList'
import TicketList from './TicketList'

function Profile(props) {

    function handleUserLogout() {
        props.logout()
    }

    return (
        <div>
        <Message info>
            Logged in as <b>{props.auth.user.username}</b>
            <Header 
                size='tiny'
                float='right'
                onClick={handleUserLogout}>
                Logout
            </Header>
        </Message>

        <Header as='h2' inverted dividing>
            TICKETS
        </Header>

        <TicketList tickets={props.tickets} />
        
        {/* <Item.Group divided>
            <OrderList orders={props.orders} />
        </Item.Group> */}

        <Divider />
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