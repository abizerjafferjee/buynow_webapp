import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button, Message, Divider, Item, Label, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import {prettyShowTime} from '../helpers/Helpers'

function Cart(props) {

    let totalPrice = 0

    const fontStyle = {color:'white'}

    let items = _.map(props.cart, (element, index) => {
        totalPrice += element.show.show_price * element.quantity
        return (
            <Item key={index}>
                <Item.Image size='tiny' src={require(`../assets/images/${element.show.image_path}`)} />

                <Item.Content>
                    <Item.Header as='a'><span className="cart_font">{element.show.title}</span></Item.Header>
                    <Item.Meta>
                        <span className='cart_font cinema'>{prettyShowTime(element.show.show_datetime)}</span>
                    </Item.Meta>
                    <Item.Description>
                        <span className="cart_font">{element.quantity} tickets X USD {element.show.show_price}</span>
                    </Item.Description>
                    <Item.Extra>
                        <Button circular icon='trash' onClick={(e) => props.handleRemoveItem(e, element)} />
                        <Button circular icon='plus' onClick={(e) => props.handleAddQuantity(e, element)} />
                        <Button circular icon='minus' onClick={(e) => props.handleRemoveQuantity(e, element)} />
                    </Item.Extra>
                </Item.Content>
            </Item>
        )
    })

    const itemList =
        <Item.Group divided>
            {items}
        </Item.Group>


    const cartEmptyMessage =
        <Message info>
            <Message.Header>
                You haven't selected any events.
            </Message.Header>
            <p>There are no tickets in your cart, go pick some live shows.</p>
        </Message>

    return (
        <div>
            {items.length > 0 ? itemList : cartEmptyMessage}
        
            <Divider />

            <Button
                content='Total'
                icon='dollar'
                label={{ basic: true, pointing: 'left', content: totalPrice.toFixed(2) }}
            />

            <Button primary floated='right' disabled={items.length <= 0} onClick={()=>props.submit()}>
                Buy tickets
            </Button>

        </div>
    )
}

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveItem: PropTypes.func.isRequired
}

export default Cart