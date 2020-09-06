import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Card } from 'semantic-ui-react'

import Show from './Show'

function ShowList(props) {

    const w = window.outerWidth
    var itemsPerRow = Math.round(w/320)

    let showList = _.map(props.shows, (show, index) => {
        return (
            <Show key={index} show={show} addToCart={props.addToCart} />
        )
    })

    return (
        <Card.Group 
            className="py-5" 
            itemsPerRow={itemsPerRow} 
            style={{border:'none'}}
        >
            {showList}
        </Card.Group>
    )
}

ShowList.propTypes = {
    shows: PropTypes.array,
    addToCart: PropTypes.func.isRequired
}

export default ShowList