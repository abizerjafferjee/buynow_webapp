import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Modal, Card, Image, Rating, Grid, Header, Divider, Button, Input, Icon, Segment } from 'semantic-ui-react'
import toastr from 'toastr'

function Show(props) {

    const [quantity, setQuantity] = useState(1);

    function handleMinusCount() {
        if (quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    function handleAddCount() {
        setQuantity(quantity+1)
    }

    function handleAddToCart() {
        props.addToCart(props.show, quantity)
        console.log(`Added <b>${props.show.title}</b> into shopping-cart.`)
    }

    function prettyShowTime(showDateTime) {
        const showTime = new Date(showDateTime)
        showTime.setSeconds(0,0)
        return showTime.toUTCString()
    }
    
    return (
            <Card>
                <Image src={require(`../assets/images/${props.show.image_path}`)} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{props.show.title}</Card.Header>
                    <Card.Meta>
                        {props.show.genre} 
                        { 
                            props.show.artists.length > 0 && 
                            <> | &nbsp;
                                { props.show.artists.map((value, index) => {
                                    const tag = index === props.show.artists.length-1 ? <span key={index}>{value.name}</span> : <span key={index}>{value.name}, </span>
                                    return tag 
                                })} 
                            </>
                        }
                    </Card.Meta>
                    <Card.Meta>
                        <small>
                        {prettyShowTime(props.show.show_datetime)}
                        </small>
                    </Card.Meta>
                    {
                        props.show.description !== 'No description' &&
                        <Card.Description>
                            {props.show.description}
                        </Card.Description>
                    }
            </Card.Content>
            <Card.Content extra>
            <>USD { props.show.show_price }</>
            &nbsp;
            <Button onClick={handleAddToCart}>
                <Button.Content visible>
                    <Icon name='shop' />
                </Button.Content>
            </Button>

            {/* <div id='quantity'>
                <Button icon='minus' size='tiny' onClick={handleMinusCount} />
                <div>{quantity}</div>
                <Button icon='add' size='tiny' onClick={handleAddCount} />
            </div> */}
            </Card.Content>
        </Card>
    )
}

Show.propTypes = {
    show: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired
}

export default Show