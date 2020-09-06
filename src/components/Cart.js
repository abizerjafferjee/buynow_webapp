import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, Item } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
import _ from 'lodash'
import Moment from 'react-moment'


function Cart(props) {

    let ticketPrices = 0

    function calcTaxes(ticketPrices) {
        return 0.13 * ticketPrices
    }

    function calcFees(ticketPrices) {
        return (ticketPrices + (0.13 * ticketPrices)) * 0.0199 + 0.30
    }

    function calcTotal(ticketPrices) {
        const taxes = 0.13 * ticketPrices
        const fees = (ticketPrices + (0.13 * ticketPrices)) * 0.0199 + 0.30
        return ticketPrices + taxes + fees
    }

    let items = _.map(props.cart, (element, index) => {
        ticketPrices += element.show.show_price * element.quantity
        return (
            <Item key={index}>
                <Item.Image size='small' src={require(`../assets/images/${element.show.image_path}`)} />

                <Item.Content>
                    <div className="h3 text-white">{ element.show.artists[0].name}</div>
                    <div className="h5 text-white"><b>{ element.show.title }</b></div>

                    <Item.Meta>
                        <div className="h5 text-white"> 
                            <Moment 
                                interval={0} 
                                format="MMM Do - LT"
                                date={element.show.show_datetime}     
                            />
                        </div>
                    </Item.Meta>
                    <Item.Description>
                        <div className="h6 text-white">{element.quantity} tickets X USD {element.show.show_price}</div>
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
        <div className="text-white d-block">
            <div className="">
                <p className="h5">You haven't selected any events.</p>
                <p className="h6">There are no tickets in your cart, go pick some live shows.</p>
            </div>
        </div>

    return (
        <div>
            {items.length > 0 ? itemList : cartEmptyMessage}
        
            <Divider />

            <div className="d-inline-block text-white">
                <div className="d-block h6"><b>Tickets:</b>&nbsp;&nbsp;USD {ticketPrices.toFixed(2)}</div>
                <div className="d-block h6"><b>Taxes (13%):</b>&nbsp;&nbsp;USD {calcTaxes(ticketPrices).toFixed(2)}</div>
                <div className="d-block h6"><b>Processing Fees (2.99% + $0.3):</b>&nbsp;&nbsp;USD {calcFees(ticketPrices).toFixed(2)}</div>
                <div className="d-block h3"><b>Total:&nbsp;&nbsp;USD {calcTotal(ticketPrices).toFixed(2)}</b></div>
            </div>
            {/* <Button
                content='Total'
                icon='dollar'
                label={{ basic: true, pointing: 'left', content: totalPrice.toFixed(2) }}
            /> */}

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