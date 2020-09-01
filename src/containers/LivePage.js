import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, Card, Header, Form, Button } from 'semantic-ui-react'

import TicketList from '../components/TicketList'
import { fetchTickets } from '../actions/Tickets'

function LivePage(props) {

    // useEffect(() => {
    //     if (props.auth.isAuthenticated) {
    //         props.fetchTickets()
    //     }
    // }, [props.auth])

    return (
        <div className="p-5">
            <Grid centered columns={2} className="p-5">
                <Grid.Column>
                    <Card className="card_background" style={{width:'100%'}}>
                        {
                            props.auth.isAuthenticated ? 
                            <Card.Content>
                                <Header size="large" color="red">Upcoming Shows</Header>
                                <TicketList tickets={props.tickets} />
                            </Card.Content>
                            : <Card.Content>
                                    <Header size="large" color="red">Enter your Ticket</Header>
                                    <Form>
                                        <Form.Field>
                                            {/* <label>Ticket Id</label> */}
                                            <input placeholder='Enter your Ticket Id' />
                                        </Form.Field>
                                        <Button primary type='submit'>Enter</Button>
                                    </Form>
                            </Card.Content>
                        }
                    </Card>
                </Grid.Column>
            </Grid>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth,
        tickets: state.tickets.data
    }
}

LivePage.propTypes = {
    auth: PropTypes.object.isRequired,
    tickets: PropTypes.array,
    fetchTickets: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {fetchTickets})(LivePage)