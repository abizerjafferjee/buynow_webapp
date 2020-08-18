import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Card } from 'semantic-ui-react'

import Show from './Show'

function ShowList(props) {

    let showList = _.map(props.shows, (show, index) => {
        return (
            <Show key={index} show={show} addToCart={props.addToCart} />
        )
    })

    return (
        <Card.Group itemsPerRow={3}>
            {showList}
        </Card.Group>
    )
}

ShowList.propTypes = {
    shows: PropTypes.array,
    addToCart: PropTypes.func.isRequired
}

export default ShowList