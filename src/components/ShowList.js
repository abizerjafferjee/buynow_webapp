import React, { useEffect, useState, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Card } from 'semantic-ui-react'

import Show from './Show'

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

function ShowList(props) {

    const [width, height] = useWindowSize();
    const cardWidth = 320
    const itemsPerRow = Math.round(width / cardWidth)

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