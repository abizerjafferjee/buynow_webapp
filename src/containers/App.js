import React, {useEffect, useState } from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import ReactGA from 'react-ga';
// import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
// import classNames from 'classnames'


import Home from './Home';
import AccountPage from './AccountPage';
import CartPage from './CartPage'
import ShowPane from './ShowPane'
import LivePage from './LivePage'
import Player from './Player'
import Header from '../components/Navs/Header';
import Footer from '../components/Navs/Footer';
import Confirm from '../components/Confirm.js'
import { filterShows } from '../actions/Shows'
import { checkAuthorizationToken } from '../actions/Auth'

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

function trackPage (page) {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

function App(props) {

  const [showSearch, setShowSearch] = useState(true)
  const [isPaneOpen, setPaneOpen] = useState(false)
  const [paneComponent, setPaneComponent] = useState('')
  const [focusShow, setFocusShow] = useState({})

  let location = useLocation();

  function togglePane(componentName) {
    setPaneComponent(componentName)
    setPaneOpen(true)
  }

  function displayComponent() {
    if (paneComponent === 'account') {
      return <AccountPage />
    } else if (paneComponent === 'cart') {
      return <CartPage 
                handleTogglePane={togglePane}
              />
    } else if (paneComponent === 'show') {
      return <ShowPane
                show={focusShow}
              />
    }
  }

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

  useEffect(() => {
    if ('id' in props.panel) {
      togglePane('show')
      
      const show = props.shows.filter(obj => {
        return obj.id === props.panel.id
      })

      if (show.length !== 0) {
        setFocusShow(show[0])
      }
    }
  }, [props.panel])

  return (
    <div>
      <Header
        auth={props.auth}
        showSearch={showSearch}
        itemsInCartCount={props.itemsInCartCount}
        shows={props.shows}
        filterShows={props.filterShows}
        handleTogglePane={togglePane} 
      />
      
      <Container id='content-wrapper' className='home-background home' fluid>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tickets/:status/:id" component={Confirm} />
            <Route exact path="/live" component={LivePage} />
            <Route exact path="/live/:ticket" component={Player} />
        </Switch>
      </Container>

      <SlidingPane
        className="pane-background"
        overlayClassName="some-custom-overlay-class"
        isOpen={isPaneOpen}
        title="Hey, it is optional pane title.  I can be React component too."
        subtitle="Optional subtitle."
        onRequestClose={() => {setPaneOpen(false)}}
        width='500px'
        hideHeader={true}
        children={displayComponent()}
      />
      
      <Footer />

    </div>
  )
}

App.propTypes = {
  itemsInCartCount: PropTypes.number.isRequired,
  shows: PropTypes.array,
  filterShows: PropTypes.func.isRequired,
  checkAuthorizationToken: PropTypes.func.isRequired,
  panel: PropTypes.object.isRequired,
  auth: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
      itemsInCartCount: state.cart.length,
      shows: state.shows.data,
      panel: state.panel,
      auth: state.auth
  }
}

export default connect(mapStateToProps, { filterShows, checkAuthorizationToken })(App);