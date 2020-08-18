import React, { useEffect, useState } from 'react';
import { useLocation, Switch, Route, BrowserRouter, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import ReactGA from 'react-ga';

import Home from './Home';
import AccountPage from './AccountPage';
import CartPage from './CartPage'
import Header from '../components/Navs/Header';
import Footer from '../components/Navs/Footer';
import { filterShows } from '../actions/Shows'
import { checkAuthorizationToken } from '../actions/Auth'

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

function trackPage (page) {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

function App(props) {

  const [showSearch, setShowSearch] = useState(true);

  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    trackPage(page);

    if (page !== '/') {
      setShowSearch(false)
    } else {
      setShowSearch(true)
    }
  }, [location]);

  useEffect(() => {
    if (localStorage.jwtToken) {
      props.checkAuthorizationToken(localStorage.jwtToken)
    }
  }, [])

  return (
    <>
      <Container fluid> 
        <Header
          showSearch={showSearch}
          itemsInCartCount={props.itemsInCartCount}
          shows={props.shows}
          filterShows={props.filterShows} 
        />
      </Container>
      
      <Container className='showListContainer' id='content-wrapper'>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/account" component={AccountPage} />
        </Switch>
      </Container>
      
      <Container fluid>
        <Footer />
      </Container>

    </>
  )
}

App.propTypes = {
  itemsInCartCount: PropTypes.number.isRequired,
  shows: PropTypes.array,
  filterShows: PropTypes.func.isRequired,
  checkAuthorizationToken: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
      itemsInCartCount: state.cart.length,
      shows: state.shows.data
  }
}

export default connect(mapStateToProps, { filterShows, checkAuthorizationToken })(App);