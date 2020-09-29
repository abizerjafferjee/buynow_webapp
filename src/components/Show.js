import React from 'react'
import PropTypes from 'prop-types'
import { Card, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Moment from 'react-moment'

import {setShowDisplay} from '../actions/Panel' 

function Show(props) {

    function handleShowPane(showId) {
        props.setShowDisplay(showId)
    }

    const imgStyle = {
        borderRadius: '5%'
    }

    return (
            <Card className="card_background" onClick={() => handleShowPane(props.show.id)}>
        
                <div className="h3 p-1">{props.show.artist && props.show.artist.name}</div>

                <div className="show-container">
                    <Image className='card_image' style={imgStyle} src={props.show.poster_img_url} ui={false} />
                    { props.show.parental_advisory && <div className="bottom-right">Parental Advisory</div> }
                </div>

                <div>
                    <div className="h3 p-1">{props.show.title}</div>
                    <div className="h4 px-1 my-0"> 
                        <Moment 
                            interval={0} 
                            format="MMM Do - LT"
                            date={props.show.show_datetime}     
                        />
                    </div>
                    <div className="h5 p-1">{props.show.language} - {props.show.genre}</div>
                </div>
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