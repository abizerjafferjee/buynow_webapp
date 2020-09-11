import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, Container, Item } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Moment from 'react-moment'

import { addToCart } from '../actions/Cart'

function ShowPane(props) {

    const [quantity, setQuantity] = useState(1);

    function handleAddToCart() {
        props.addToCart(props.show, quantity)
        console.log(`Added <b>${props.show.title}</b> into shopping-cart.`)
    }

    return (
        <Container fluid className="p-3">
        <Item.Group>
            <Item>
                {/* <Item.Image size='small' src={require(`../assets/images/${props.show.image_path}`)} /> */}
                <Item.Image size='small' src={props.show.poster_img_url} />
                
                <Item.Content>
                    <div className="h3 text-white">{props.show.artists[0].name}</div>
                    <div className="h5 text-white">{ props.show.title }</div>
                    <Divider />
                    <Item.Meta>
                        <div className="h5 text-white"> 
                            <Moment 
                                interval={0} 
                                format="MMM Do - LT"
                                date={props.show.show_datetime}     
                            />
                            <Button size="tiny" color="red" floated='right' onClick={handleAddToCart} className="custom-btn">
                                USD { props.show.show_price }
                            </Button>
                        </div>
                    </Item.Meta>
                </Item.Content>
            </Item>
            </Item.Group>
            {
                props.show.description !== "No description" && <div className="h4 text-white">{ props.show.description }</div>

            }
        </Container>
    )
}

ShowPane.propTypes = {
    show: PropTypes.object.isRequired,
    panel: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        panel: state.panel
    }
}

export default connect(mapStateToProps, {addToCart})(ShowPane)