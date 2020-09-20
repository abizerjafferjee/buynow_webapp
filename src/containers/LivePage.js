import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Form, Button, Container } from 'semantic-ui-react'

function LivePage(props) {
    
    const [ticketId, setTicketId] = useState('')

    function handleTicketChange(e) {
        const {value} = e.target
        setTicketId(value)
    }

    function handleTicketForm(e) {
        e.preventDefault()
        props.history.push(`/live/${ticketId}`)
    }

    return (
        <Container fluid>
            <center className="p-5">
                <div className="ticket-form-width">
                    <div className='h2 p-3 site-font'>Use your ticket to enter the live show</div>
                    <Form>
                        <Form.Input
                            icon='ticket'
                            iconPosition='left'
                            name='ticketId'
                            value={ticketId}
                            placeholder='Enter your ticket Id'
                            onChange={handleTicketChange}
                            size="big"
                        />
                        <Button primary type='submit' onClick={handleTicketForm}><span className="site-font">Enter</span></Button>
                    </Form>
                </div>
            </center>
        </Container>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth
    }
}

LivePage.propTypes = {
    auth: PropTypes.object.isRequired
}

export default connect(mapStateToProps, {})(LivePage)