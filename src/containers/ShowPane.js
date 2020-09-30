import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, Container, Item, List, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Moment from 'react-moment'

import { addToCart } from '../actions/Cart'

function ShowPane(props) {
    console.log(props.show)
    const [disabled , setDisabled] = useState(false)

    function handleAddToCart() {
        props.addToCart(props.show, 1)
        setDisabled(true)
    }

    function artistLinks(artist) {
        const isYoutube = artist.youtube_link !== null
        const isSpotify = artist.spotify_link !== null
        const isSoundCloud = artist.soundcloud_link !== null
        return (
            <List horizontal>
                { 
                    isYoutube && 
                    <List.Item>
                        <Image 
                            avatar 
                            src={require('../assets/images/youtube_icon.png')}
                            href={artist.youtube_link}
                        />
                    </List.Item>
                }
                { 
                    isSpotify && 
                    <List.Item>
                        <Image
                            avatar 
                            src={require('../assets/images/spotify_icon.png')}
                            href={artist.spotify_link}        
                        />
                    </List.Item>
                }
                { 
                    isSoundCloud && 
                    <List.Item>
                        <Image 
                            avatar 
                            src={require('../assets/images/soundcloud_icon.jpg')}
                            href={artist.soundcloud_link}
                        />
                    </List.Item>
                }
            </List>
        )
    }

    return (
        <Container fluid className="p-3">
            <Item.Group>
                <Item>
                    <Item.Image 
                        size='small'
                        src={props.show.poster_img_url}
                    />
                    <Item.Content>
                        <div className="h3 site-font">
                            {props.show.artist.name}
                        </div>
                        <div className="h5 site-font">
                            { props.show.title }
                        </div>
                        <Divider />
                        <Item.Meta>
                            <div className="h5 site-font"> 
                                <Moment 
                                    interval={0} 
                                    format="MMM Do - LT"
                                    date={props.show.show_datetime}     
                                />
                                <Button 
                                    size="tiny"
                                    color="red"
                                    floated='right'
                                    disabled={disabled}
                                    onClick={handleAddToCart}
                                    className="custom-btn site-font">
                                    USD { props.show.show_price }
                                </Button>
                            </div>
                        </Item.Meta>
                    </Item.Content>
                </Item>
            </Item.Group>
            { artistLinks(props.show.artist) }
            {
                props.show.description !== "No description" &&
                <div className="mt-1 h4 site-font">
                    { props.show.description }
                </div>
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

export default connect(mapStateToProps, { addToCart })(ShowPane)