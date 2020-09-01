import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Modal, Card, Image, Rating, Grid, Header, Divider, Button, Input, Icon, Segment } from 'semantic-ui-react'
import toastr from 'toastr'
import { connect } from 'react-redux'

import {prettyShowTime} from '../helpers/Helpers'
import {setShowDisplay} from '../actions/Panel' 

function Show(props) {

    const [quantity, setQuantity] = useState(1);

    function handleAddToCart() {
        props.addToCart(props.show, quantity)
        console.log(`Added <b>${props.show.title}</b> into shopping-cart.`)
    }

    function handleShowPane(showId) {
        props.setShowDisplay(showId)
        // props.handleTogglePane('show')
    }

    const fontStyle = {
        fontFamily: 'Russo One, sans-serif',
        color: 'white',
        fontSize: '20px'
    }

    const imgStyle = {
        borderRadius: '5%'
    }

    return (
            <Card className="card_background my-5 card_text" onClick={() => handleShowPane(props.show.id)}>
                <Card.Header className="p-2">{props.show.title}</Card.Header>
                <Image className='card_image' style={imgStyle} src={require(`../assets/images/${props.show.image_path}`)} ui={false} />
                <Card.Content>
                    <Card.Description style={fontStyle}>
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
                        <br></br>
                        <small>
                            {prettyShowTime(props.show.show_datetime)}
                        </small>
                    </Card.Description>
            </Card.Content>
            {/* <Card.Content extra>
            <Header floated='left' as='h4'>USD { props.show.show_price }</Header>
            <Button floated='right' onClick={handleAddToCart}>
                <Button.Content visible>
                    <Icon name='shop' />
                </Button.Content>
            </Button>
            </Card.Content> */}
        </Card>
    )
}

Show.propTypes = {
    show: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
    panel: PropTypes.object.isRequired,
    setShowDisplay: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        panel: state.panel
    }
}

export default connect(mapStateToProps, {setShowDisplay})(Show)