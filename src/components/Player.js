import React from 'react'
import { Item, Container } from 'semantic-ui-react'
import ReactPlayer from "react-player"
import Moment from 'react-moment'

// import Credit from "./Credits"
// import NotStreamingIcon from "../helpers/not_streaming";

const fallbackUrl =
    "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8";

const playerConfigs = {
    file: {
        forceHLS: true
    }
}

function Player(props) {

    const videoUrl = props.liveshow.show.hls_url !== null ? props.liveshow.show.hls_url : fallbackUrl
    
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
            <div className="row">
                <div className="col-lg-8 col-md-7 col-sm-12">
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
                <div className="col-lg-4 col-md-5 col-sm-12">
                </div>
            </div>

            <Item.Group>
                <Item>
                    <Item.Image size='small' src={ props.liveshow.show.poster_img_url } />

                    <Item.Content>
                        <div className="h2 site-font">{ props.liveshow.show.title }</div>
                        <div className="h4 site-font">{ props.liveshow.show.artist.name }</div>
                        <Item.Description>
                            <div className="h5 site-font"> 
                                <Moment fromNow>
                                    {props.liveshow.show.show_datetime} 
                                </Moment>
                                <div className="h5 site-font"> 
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
        </div>
    )
}

export default Player