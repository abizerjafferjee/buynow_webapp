
import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Dimmer, Loader } from 'semantic-ui-react'
import { useParams, Prompt, withRouter } from 'react-router-dom'

import Player from "../components/Player"
import { fetchLiveShow, updateLiveShow } from '../actions/LiveShow'

function PlayerPage(props) {

    const {ticket} = useParams()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (ticket !== undefined) {
            props.fetchLiveShow(ticket)
        }
    }, [ticket])

    function onComponentClose(event) {
        event.preventDefault()
        closeShow()
    }

    function closeShow() {
        if (ticket !== undefined) {
            props.updateLiveShow(ticket, false)
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        window.addEventListener('unload', onComponentClose)
        const unlisten = props.history.listen((location, action) => {
            closeShow()
        })
        return () => {
            window.removeEventListener('unload', onComponentClose)
            unlisten()
        }
    }, [])

    function showError(error) {
        if (error.response.status === 404) {
            return <div className="site-font">Ticket not found</div>
        } else if (error.response.status === 423) {
            return <div className="site-font">Ticket is being used on another device</div>
        } else {
            return <div className="site-font">Something went wrong</div>
        }
    }

    return (
        <React.Fragment>
            <div className="p-3">
                { props.liveshow.isLoading && <Dimmer active><Loader /></Dimmer> }
                { props.liveshow.error && showError(props.liveshow.error) }
                { props.liveshow.data !== undefined && <Player liveshow={props.liveshow.data} /> }
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        liveshow: state.liveshow
    }
}

PlayerPage.propTypes = {
    liveshow: PropTypes.object,
    fetchLiveShow: PropTypes.func.isRequired,
    updateLiveShow: PropTypes.func.isRequired
}

export default withRouter(connect(mapStateToProps, {fetchLiveShow, updateLiveShow})(PlayerPage))