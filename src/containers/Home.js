import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ShowList from '../components/ShowList'
import { fetchShows } from '../actions/Shows'
import { addToCart } from '../actions/Cart'

const Home = (props) => {

  useEffect(() => {
    props.fetchShows()
  }, [])

  return (
    <>
      <ShowList shows={props.shows} addToCart={props.addToCart} />
    </>
  );
}

Home.propTypes = {
  shows: PropTypes.array,
  fetchShows: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
      shows: state.shows.data
  }
}

export default connect(mapStateToProps, {fetchShows, addToCart})(Home);