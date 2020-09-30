import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

import ShowList from '../components/ShowList'
import { fetchShows } from '../actions/Shows'
import { addToCart } from '../actions/Cart'
import { setShowDisplay } from '../actions/Panel' 

const Home = (props) => {

  // useEffect(() => {
  //   props.fetchShows()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
      <ShowList 
        shows={props.shows} 
        addToCart={props.addToCart} 
        history={props.history} 
      />
  )
}

Home.propTypes = {
  shows: PropTypes.array,
  fetchShows: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  setShowDisplay: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
      shows: state.shows.data
  }
}

export default connect(mapStateToProps, { fetchShows, addToCart, setShowDisplay })(Home);