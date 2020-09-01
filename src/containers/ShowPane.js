import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Step, Icon, Grid, Segment, Button, Header, Loader, Image, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { addToCart } from '../actions/Cart'
import {prettyShowTime} from '../helpers/Helpers'

function ShowPane(props) {

    const [quantity, setQuantity] = useState(1);

    function handleAddToCart() {
        props.addToCart(props.show, quantity)
        console.log(`Added <b>${props.show.title}</b> into shopping-cart.`)
    }

    return (
        <Grid className="p-0 m-0"  style={{width:'100%'}}>
            <Grid.Row>
                <Grid.Column className="p-0 m-0">
                    <Image className="m-0 p-0" fluid src={require(`../assets/images/${props.show.image_path}`)} ui={true} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column className="p-0 m-0">
                    <Segment.Group>
                        <Segment>
                            <Header as='h2'>{ props.show.title }</Header>
                        </Segment>
                        {
                            props.show.description !== "No description" &&
                            <Segment>
                                <Header as='h4'>{ props.show.description }</Header>
                            </Segment>
                        }
                        <Segment>
                            <Header>
                                { 
                                        props.show.artists.length > 0 && 
                                        <> { props.show.artists.map((value, index) => {
                                                const tag = index === props.show.artists.length-1 ? <span key={index}>{value.name}</span> : <span key={index}>{value.name}, </span>
                                                return tag 
                                            })} 
                                        </>
                                }
                            </Header>
                        </Segment>
                        <Segment>
                            <Header>
                            {props.show.genre} 
                            </Header>
                        </Segment>
                        <Segment>
                            <Header>
                            {prettyShowTime(props.show.show_datetime)}
                            </Header>
                        </Segment>

                    </Segment.Group>
                    <Divider></Divider>
                    <Header inverted floated='left' as='h4'>USD { props.show.show_price }</Header>
                    <Button floated='right' onClick={handleAddToCart}>
                        <Button.Content visible>
                            <Icon name='shop' />
                        </Button.Content>
                    </Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
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