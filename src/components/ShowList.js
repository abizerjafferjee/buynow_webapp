import React, { useEffect, useState, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Card } from 'semantic-ui-react'

import Show from './Show'

import { useWindowSize } from '../helpers/Helpers'

function ShowList(props) {

    const [width, height] = useWindowSize();
    const itemsPerRow = Math.round(width / 320)

    let showList = _.map(props.shows, (show, index) => {
        return (
            <Show 
                key={index}
                show={show}
                addToCart={props.addToCart}
            />
        )
    })

    return (
        <Card.Group 
            className="py-5" 
            itemsPerRow={itemsPerRow}
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