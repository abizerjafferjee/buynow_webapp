import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Card } from 'semantic-ui-react'

import Show from './Show'

function ShowList(props) {

    var itemsPerRow = 6
    const w = window.outerWidth

    if (w >= 1500) {
        itemsPerRow = 5
    } else if (w >= 750 && w <= 1500) {
        itemsPerRow = 3
    } else {
        itemsPerRow = 1
    }

    let showList = _.map(props.shows, (show, index) => {
        return (
            <Show key={index} show={show} addToCart={props.addToCart} />
        )
    })

    return (
        <Card.Group className="py-5" itemsPerRow={itemsPerRow} style={{border:'none'}}>
            {showList}
        </Card.Group>
    )
}

ShowList.propTypes = {
    shows: PropTypes.array,
    addToCart: PropTypes.func.isRequired
}

export default ShowList