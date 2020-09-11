import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Item, Header, Button, Container, Dimmer, Loader, Image } from 'semantic-ui-react'
import { useParams, useLocation } from 'react-router-dom'

import Player from "../components/Player"
import { fetchLiveShow, updateLiveShow, clearLiveShow } from '../actions/LiveShow'

function PlayerPage(props) {

    const [liveshow, setLiveShow] = useState(null)
    const {ticket} = useParams()

    useEffect(() => {
        if (ticket !== undefined) {
            props.fetchLiveShow(ticket)
        }
    }, [ticket]);

    useEffect(() => {
        if (props.liveshow.data !== undefined) {
            // setLiveShow(props.liveshow.data)
            updateLiveShow(props.liveshow.data.uuid, true)
        }
    }, [props.liveshow])

    function closeShow(event) {
        event.preventDefault()
        const uuid = localStorage.getItem('liveshowId')
        if (uuid !== undefined) {
            updateLiveShow(uuid, false)
            props.clearLiveShow()
        }
    }

    useEffect(() => {
        window.addEventListener('unload', closeShow)
        return () => {
            const uuid = localStorage.getItem('liveshowId')
            if (uuid !== undefined) {
                updateLiveShow(uuid, false)
                props.clearLiveShow()
            }
            window.removeEventListener('unload', closeShow)
        }
    }, [])

    function showError(error) {
        if (error.response.status === 404) {
            return <div className="text-white">Ticket not found</div>
        } else if (error.response.status === 423) {
            return <div className="text-white">Ticket is being used on another device</div>
        } else {
            return <div className="text-white">Something went wrong</div>
        }
    }

    return (
        <div className="p-3">
            { props.liveshow.isLoading && <Dimmer active><Loader /></Dimmer> }
            { props.liveshow.error && showError(props.liveshow.error) }
            { props.liveshow.data !== undefined && <Player liveshow={props.liveshow.data} /> }
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth,
        liveshow: state.liveshow
    }
}

PlayerPage.propTypes = {
    auth: PropTypes.object.isRequired,
    liveshow: PropTypes.object,
    fetchLiveShow: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {fetchLiveShow, clearLiveShow})(PlayerPage)