import React, {useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ReactGA from 'react-ga'

import Routes from './Routes'
import SidePane from './containers/SidePanePage'
import Header from './components/Navs/Header'
import Footer from './components/Navs/Footer'

import { fetchShows, filterShows } from './actions/Shows'
import { checkAuthorizationToken } from './actions/Auth'
import { setPanelComponent } from './actions/Panel'
import { useWindowSize } from './helpers/Helpers'
import { REACT_APP_GA_CODE } from './constants/Common'

// ReactGA.initialize(process.env.REACT_APP_GA_CODE)
ReactGA.initialize(REACT_APP_GA_CODE)

function App(props) {
  
  useEffect(() => {
    // if (localStorage.jwtToken) {
    //   props.checkAuthorizationToken(localStorage.jwtToken)
    // }
    props.fetchShows()
  }, [])
  
  return (
    <div>
      <Header
        auth={props.auth}
        itemsInCartCount={props.itemsInCartCount}
        shows={props.shows}
        filterShows={props.filterShows}
        setPanelComponent={props.setPanelComponent} 
      />
      
      <div className='home-background'>
        <Routes />
      </div>

      <SidePane />
      <Footer />
    </div>
  )
}

App.propTypes = {
  shows: PropTypes.array,
  auth: PropTypes.object,
  filterShows: PropTypes.func.isRequired,
  itemsInCartCount: PropTypes.number.isRequired,
  checkAuthorizationToken: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    shows: state.shows.data,
    panel: state.panel,
    itemsInCartCount: state.cart.length
  }
}

export default connect(mapStateToProps, { filterShows, fetchShows, checkAuthorizationToken, setPanelComponent })(App)