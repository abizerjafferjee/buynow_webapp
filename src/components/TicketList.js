import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Item, List, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

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
                        <List.Content>
                            <List.Header as={Link} to={`/live/${ticket.uuid}`}>{ticket.uuid}</List.Header>
                            <List.Description>
                                <div className="h6 site-font">{ticket.active ? <span className="text-success">Active</span> : <span className="text-secondary">Inactive</span>}</div>
                            </List.Description>
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
                <Item.Image size='small' src={show.poster_img_url} />

                <Item.Content>
                    <div className="site-font h3">{ show.artists[0].name}</div>
                    <div className="h5 site-font"><b>{ show.title }</b></div>
                    <Item.Meta>
                        <div className="h5 site-font"> 
                            <Moment 
                                interval={0} 
                                format="MMM Do - LT"
                                date={show.show_datetime}     
                            />
                        </div>
                    </Item.Meta>
                    <Item.Description>
                        <div className="h5 site-font">You have {getTicketCount(show.id)} tickets for this show.</div>
                    </Item.Description>
                    <List divided relaxed>
                        {getTickets(show.id)}
                    </List>
                </Item.Content>
            </Item>
        )
    })

    const itemList = <Item.Group divided>{items}</Item.Group>

    return (
        <div className="site-font">
            {shows.length > 0 ? itemList : <p>No shows for you :(</p>}
        </div>
    )
}

TicketList.propTypes = {
    tickets: PropTypes.array
}

export default TicketList