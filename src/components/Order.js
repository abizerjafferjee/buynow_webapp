import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Modal, List, Header, Table, Divider, Input, Button, Item } from 'semantic-ui-react'
import _ from 'lodash'

function Order(props) {

    const [modalOpen, setModalOpen] = useState(false)

    function handleModalOpen() {
        setModalOpen(true)
    }

    function handleModalOnClose() {
        setModalOpen(false)
    }


    let formattedDate = props.order.date.split('T')[0] + ' ' + props.order.date.split('T')[1].split('.')[0]

    const modalTrigger =
        <Item key={props.idx} onClick={handleModalOpen}>
            <Item.Content>
                {/* {props.order} */}
                {/* <Item.Header as='a'><span className="cart_font">{element.show.title}</span></Item.Header>
                <Item.Meta>
                    <span className='cart_font cinema'>{prettyShowTime(element.show.show_datetime)}</span>
                </Item.Meta>
                <Item.Description>
                    <span className="cart_font">{element.quantity} tickets X USD {element.show.show_price}</span>
                </Item.Description> */}
            </Item.Content>
        </Item>
        {/* <List.Item onClick={handleModalOpen}>
            <List.Icon name='tag' size='large' verticalAlign='middle' />
            <List.Content>
                <List.Header as='a'>{props.order.id}</List.Header>
                <List.Description as='a'>{formattedDate}</List.Description>
            </List.Content>
        </List.Item> */}

    const items = _.map(props.order.shows, (showName, idx) => {
        return (
            <Table.Row key={idx}>
                <Table.Cell>{idx+1}</Table.Cell>
                <Table.Cell>{showName}</Table.Cell>
                <Table.Cell>{props.order.quantities[idx]}</Table.Cell>
            </Table.Row>
        )
    })

    return (
        <Modal trigger={modalTrigger} open={modalOpen} onClose={handleModalOnClose} closeIcon>
        <Modal.Header>Order Details</Modal.Header>

        <Modal.Content>
            <Header as='h3' attached='top'>Product list</Header>
            <Table striped padded attached>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>SN</Table.HeaderCell>
                        <Table.HeaderCell>Product name</Table.HeaderCell>
                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {items}
                </Table.Body>
            </Table>

            <Divider />

            <Button
                content='Total'
                icon='dollar'
                label={{ basic: true, pointing: 'left', content: props.order.total_price }}
            />
        </Modal.Content>
    </Modal>
    )
}

Order.propTypes = {
    order: PropTypes.object.isRequired
}

export default Order