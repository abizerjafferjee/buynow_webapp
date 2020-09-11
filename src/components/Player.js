import React from 'react'
import { Item, Header, Button, Container, Dimmer, Loader, Image } from 'semantic-ui-react'
import ReactPlayer from "react-player"
import Moment from 'react-moment'
import moment from 'moment'

import Credit from "./Credits"
import NotStreamingIcon from "../helpers/not_streaming";

const fallbackUrl =
    "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8";


const playerConfigs = {
    file: {
        forceHLS: true
    }
}

function Player(props) {

    const videoUrl = fallbackUrl
    
    //             <Container fluid className="mb-3">
    //                 <center>
    //                     <div className="player-error">
    //                         {/* <NotStreamingIcon width={64} height={64} fill='#fa4659' /> */}
    //                         <Loader className="m-0 p-0" size="large" active />
    //                         <p>Stream has not begun...</p>
    //                     </div>
    //                 </center>
    //             </Container>

    return (
        <div>

            <Container fluid>
                <div className='player-wrapper p-3'>
                    <ReactPlayer
                        className='player'
                        controls
                        muted
                        config={playerConfigs}
                        url={videoUrl}
                        playing
                        width='100%'
                        height='100%'
                    />
                </div>
            </Container>

            <Item.Group>
                <Item>
                    <Item.Image size='small' src={ props.liveshow.show.poster_img_url } />

                    <Item.Content>
                        <div className="h2 text-white">{ props.liveshow.show.title }</div>
                        <div className="h4 text-white">{ props.liveshow.show.artists[0].name }</div>
                        <Item.Description>
                            <div className="h5 text-white"> 
                                <Moment fromNow>
                                    {props.liveshow.show.show_datetime} 
                                </Moment>
                                <div className="h5 text-white"> 
                                    <Moment 
                                        interval={0} 
                                        format="MMM Do - LT"
                                        date={ props.liveshow.show.show_datetime }     
                                    />
                                </div>
                            </div>
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>

            {/* <div className="intro">
                <div className="row p-4">
                    <div className="col" align="right">
                        <div className="player_img"><Image size="small" src={ props.liveshow.show.poster_img_url } /></div>
                    </div>
                    <div className="col-10">
                        <div align="left">
                            <div className="display-3">{ props.liveshow.show.title }</div>
                            <div className="h4">{ props.liveshow.show.artists[0].name }</div>
                            <div className="h5 text-white"> 
                                <Moment fromNow>
                                    {props.liveshow.show.show_datetime} 
                                </Moment>
                                <div className="h5 text-white"> 
                                    <Moment 
                                        interval={0} 
                                        format="MMM Do - LT"
                                        date={ props.liveshow.show.show_datetime }     
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default Player