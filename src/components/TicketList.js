import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Button, Message, Divider, Item, Label, Icon, List, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import {prettyShowTime} from '../helpers/Helpers'

function TicketList(props) {

    const [shows, setShows] = useState([])

    useEffect(() => {
        if (props.tickets !== undefined && props.tickets.length > 0) {
            setShows(
                getUniqueShows(props.tickets)
            )
        }
    }, [props.tickets])

    function getUniqueShows(tickets) {
        var showIds = []
        var shows = []

        for (var i=0; i < tickets.length; i++) {
            const show = tickets[i]['show']
            if (!showIds.includes(show['id'])) {
                showIds.push(show['id'])
                shows.push(show)
            }
        }

        return shows
    }

    function getTicketCount(showId) {
        const items = _.filter(props.tickets, (ticket, index) => {
            if (ticket.show.id === showId) {
                return ticket
            }
        })

        return items.length
    }

    function getTickets(showId) {
        
        const items = _.map(props.tickets, (ticket, index) => {
            if (ticket.show.id === showId) {
                return (
                    <List.Item key={index}>
                        {/* <List.Icon name='github' size='large' verticalAlign='middle' /> */}
                        <List.Content>
                            <List.Header as={Link} to={`/live/${ticket.uuid}`}>{ticket.uuid}</List.Header>
                            <List.Description as='a'>{ticket.active ? <span>Active</span> : <span>Inactive</span>}</List.Description>
                        </List.Content>
                    </List.Item>
                )
            }
        })

        return items
    }

    let items = _.map(shows, (show, index) => {

        return (
            <Item key={index}>
                <Item.Image size='tiny' src={require(`../assets/images/${show.image_path}`)} />

                <Item.Content>
                    <Item.Header as='a'><span className="cart_font">{show.title}</span></Item.Header>
                    <Item.Meta>
                        <span className='cart_font cinema'>{prettyShowTime(show.show_datetime)}</span>
                    </Item.Meta>
                    <Item.Description>
                        <Header size="tiny"><span className="cart_font">You have {getTicketCount(show.id)} tickets for this show.</span></Header>
                    </Item.Description>
                    <List divided relaxed>
                        {getTickets(show.id)}
                    </List>
                </Item.Content>
            </Item>
        )
    })

    const itemList =
        <Item.Group divided>
            {items}
        </Item.Group>

    return (
        <div>
            {shows.length > 0 ? itemList : <p>No shows for you :(</p>}
        </div>
    )
}

TicketList.propTypes = {
    tickets: PropTypes.array
}

export default TicketList