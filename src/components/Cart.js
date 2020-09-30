import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, Item, Icon, Popup } from 'semantic-ui-react'
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
        const taxes = calcTaxes(ticketPrices)
        const fees = calcFees(ticketPrices)
        return ticketPrices + taxes + fees
    }

    let items = _.map(props.cart, (element, index) => {
        ticketPrices += element.show.show_price * element.quantity
        return (
            <Item key={index}>
                <Item.Image 
                    size='small' 
                    src={ element.show.poster_img_url }     
                />
                <Item.Content>
                    <div className="h3 site-font">
                        { element.show.artist.name }
                    </div>
                    <div className="h5 site-font">
                        <b>{ element.show.title }</b>
                    </div>
                    <Item.Meta>
                        <div className="h5 site-font"> 
                            <Moment 
                                interval={0} 
                                format="MMM Do - LT"
                                date={element.show.show_datetime}     
                            />
                        </div>
                    </Item.Meta>
                    <Item.Description>
                        <div className="h6 site-font">
                            { element.quantity } tickets X USD { element.show.show_price }
                        </div>
                    </Item.Description>
                    <Item.Extra>
                        <Button circular icon='trash' onClick={(e) => props.removeFromCart(element.id)} />
                        <Button circular icon='plus' onClick={(e) => props.addToCart(element.show, 1)} />
                        <Button circular icon='minus' onClick={(e) => props.addToCart(element.show, -1)} />
                        <Popup
                            content="Each ticket has its own ticket link that you can share with your friends so they can watch the show on their own device."
                            key="1"
                            header="How will I use multiple tickets?"
                            trigger={ <Icon size='large' name='question circle outline' inverted /> }
                        />
                    </Item.Extra>
                </Item.Content>
            </Item>
        )
    })
        
    const cartEmptyMessage =
        <div className="text-white d-block site-font">
            <p className="h5">
                You haven't selected any events.
            </p>
            <p className="h6">
                There are no tickets in your cart, go pick some live shows.
            </p>
        </div>

    return (
        <div>
            {
                items.length === 0 ? 
                cartEmptyMessage :
                <Item.Group divided>
                    {items}
                </Item.Group>
            }
            <Divider />
            { 
                items.length > 0 &&
                <div className="d-inline-block">
                    <div className="d-block h6 site-font">
                        <b>Tickets:</b>&nbsp;&nbsp;USD {ticketPrices.toFixed(2)}
                    </div>
                    <div className="d-block h6 site-font">
                        <b>Taxes (13%):</b>&nbsp;&nbsp;USD {calcTaxes(ticketPrices).toFixed(2)}    
                    </div>
                    <div className="d-block h6 site-font">
                        <b>Processing Fees (1.99% + $0.3):</b>&nbsp;&nbsp;USD {calcFees(ticketPrices).toFixed(2)}
                    </div>
                    <div className="d-block h3 site-font">
                        <b>Total:&nbsp;&nbsp;USD {calcTotal(ticketPrices).toFixed(2)}</b>
                    </div>
                </div>
            }

            <Button 
                primary 
                floated='right'
                disabled={items.length <= 0}
                onClick={()=>props.submit()}
            >
                <span className="site-font">
                    Buy tickets
                </span>
            </Button>

        </div>
    )
}

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveItem: PropTypes.func.isRequired
}

export default Cart