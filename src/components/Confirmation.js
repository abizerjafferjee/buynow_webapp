import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Segment, Table, Button, Divider, Header, Radio, Input } from 'semantic-ui-react'
import _ from 'lodash'

function Confirmation(props) {

    const [totalPrice, setTotalPrice] = useState(0)

    function items() {

        props.cart.forEach(element => {
            console.log(element)
        })

        // const a = []

        _.map(props.cart, (element, index) => {
            return (
                <Table.Row key={index}>
                    <Table.Cell>{index+1}</Table.Cell>
                    <Table.Cell>{element.show.title}</Table.Cell>
                    <Table.Cell>{element.quantity}</Table.Cell>
                    <Table.Cell>{element.show.show_price}</Table.Cell>
                    <Table.Cell>{(element.show.show_price * element.quantity).toFixed(2)}</Table.Cell>
                </Table.Row>
            )
        })

        // console.log(a)

    }

    function submit() {
        props.submit()
    }

    return (
        <div>
            <Segment attached>
                <Header as='h3' attached='top'>Shopping cart</Header>
                <Table striped padded attached>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>SN</Table.HeaderCell>
                            <Table.HeaderCell>Product name</Table.HeaderCell>
                            <Table.HeaderCell>Quantity</Table.HeaderCell>
                            <Table.HeaderCell>Unit Price</Table.HeaderCell>
                            <Table.HeaderCell>Subtotal</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    {
                        _.map(props.cart, (element, index) => {
                            return (
                                <Table.Row key={index}>
                                    <Table.Cell>{index+1}</Table.Cell>
                                    <Table.Cell>{element.show.title}</Table.Cell>
                                    <Table.Cell>{element.quantity}</Table.Cell>
                                    <Table.Cell>{element.show.show_price}</Table.Cell>
                                    <Table.Cell>{(element.show.show_price * element.quantity).toFixed(2)}</Table.Cell>
                                </Table.Row>
                            )
                        })
                    }
                    </Table.Body>
                </Table>

                {/* <Header as='h3' attached='top'>Billing</Header>
                <Segment attached>
                    <Radio label={props.billing.data.charAt(0).toUpperCase() + props.billing.data.slice(1)} checked />
                </Segment> */}
            </Segment>

            <Divider />

            <Button
                content='Total'
                icon='dollar'
                label={{ basic: true, pointing: 'left', content: totalPrice.toFixed(2) }}
            />

            <Button.Group floated='right'>
                <Button primary onClick={(e) => props.previousStep()}>Previous step</Button>
                <Button.Or />
                <Button color='red' onClick={submit}>Place order</Button>
            </Button.Group>
        </div>
    )
}

export default Confirmation