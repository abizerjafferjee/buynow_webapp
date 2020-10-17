import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, Container, Item, List, Image, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import ReactGA from 'react-ga'
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from 'react-share'

import { addToCart } from '../actions/Cart'
import { serverUrl } from '../constants/Axios'

function ShowPane(props) {
    const [disabled , setDisabled] = useState(false)
    const [addedToCartMsg, setAddedToCartMsg] = useState(false)

    function handleAddToCart() {
        props.addToCart(props.show, 1)
        disableButton(true)
        ReactGA.event({
            'category':'Show',
            'action':'Add to Cart',
            'label':'Button',
            'value':props.show.title
        })
    }

    function disableButton() {
        setDisabled(true)
        setAddedToCartMsg(true)
        setTimeout(() => {
            setAddedToCartMsg(false)
        }, 1000)
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
                        <ReactGA.OutboundLink
                            eventLabel="Youtube"
                            to={artist.youtube_link}
                            target="_blank"
                        >
                            <Image 
                                avatar 
                                src={require('../assets/images/youtube_icon.png')}
                                href={artist.youtube_link}
                            />
                        </ReactGA.OutboundLink>
                    </List.Item>
                }
                { 
                    isSpotify && 
                    <List.Item>
                        <ReactGA.OutboundLink
                            eventLabel="Spotify"
                            to={artist.spotify_link}
                            target="_blank"
                        >
                            <Image
                                avatar 
                                src={require('../assets/images/spotify_icon.png')}
                                href={artist.spotify_link}        
                            />
                        </ReactGA.OutboundLink>
                    </List.Item>
                }
                { 
                    isSoundCloud && 
                    <List.Item>
                        <ReactGA.OutboundLink
                            eventLabel="Soundcloud"
                            to={artist.soundcloud_link}
                            target="_blank"
                        >
                            <Image 
                                avatar 
                                src={require('../assets/images/soundcloud_icon.jpg')}
                                href={artist.soundcloud_link}
                            />
                        </ReactGA.OutboundLink>
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
                                    {
                                        addedToCartMsg ? 
                                        <>Added to Cart</>:
                                        <>USD { props.show.show_price }</>
                                    }
                                </Button>
                            </div>
                        </Item.Meta>
                    </Item.Content>
                </Item>
            </Item.Group>
            { artistLinks(props.show.artist) }
            {
                props.show.description !== null &&
                <div className="mt-1 h4 site-font">
                    { props.show.description }
                </div>
            }
            <Divider />
            <List horizontal>
                <List.Item>
                    <div className="h5 site-font">
                        Share this show with your friends
                    </div>
                </List.Item>
                <List.Item>
                    <FacebookShareButton
                        url={`${serverUrl}/shows/${props.show.slug}`}
                    >
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                </List.Item>
                <List.Item>
                    <TwitterShareButton
                        url={`${serverUrl}/shows/${props.show.slug}`}
                    >
                        <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                </List.Item>
            </List>

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