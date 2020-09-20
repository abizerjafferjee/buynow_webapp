import React, {useEffect, useState } from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Responsive } from 'semantic-ui-react'
import ReactGA from 'react-ga';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
// import { render } from "react-dom";
// import classNames from 'classnames'

import Home from './Home';
import AccountPage from './AccountPage';
import CartPage from './CartPage'
import ShowPane from './ShowPane'
import LivePage from './LivePage'
import PlayerPage from './PlayerPage'
import Header from '../components/Navs/Header';
import Footer from '../components/Navs/Footer';
import Confirm from '../components/Confirm.js'
import Policies from '../components/Static/Policies.js'
import Faq from '../components/Static/Faq.js'
import ResetPassword from './ResetPassword.js'
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
  const [hidePaneCloseButton, setHidePaneCloseButton] = useState(true)
  const [paneWidth, setPaneWidth] = useState('500px')

  let location = useLocation();
  // const w = window.outerWidth

  function togglePane(componentName) {
    setPaneComponent(componentName)
    setPaneOpen(true)
  }

  function displayComponent() {
    if (paneComponent === 'account') {
      return <AccountPage />
    } else if (paneComponent === 'cart') {
      return <CartPage handleTogglePane={togglePane} />
    } else if (paneComponent === 'show') {
      return <ShowPane show={focusShow} />
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
    // if (localStorage.jwtToken) {
    //   props.checkAuthorizationToken(localStorage.jwtToken)
    // }
    const w = window.outerWidth
    if (w <= Responsive.onlyMobile.maxWidth) {
      setPaneWidth('320px')
      setHidePaneCloseButton(false)
    } else {
      setPaneWidth('500px')
      setHidePaneCloseButton(true)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      
      <div className='home-background'>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shows/:slug" component={Home} />
            <Route exact path="/tickets/:status/:id" component={Confirm} />
            <Route exact path="/live" component={LivePage} />
            <Route path="/live/:ticket" component={PlayerPage} />
            <Route exact path="/cart">
                <CartPage handleTogglePane={togglePane} />
            </Route>
            <Route exact path="/account" component={AccountPage} />
            <Route path={["/policies", "/policies/:doc"]} component={Policies} />
            <Route path="/reset/:token" component={ResetPassword} />
            <Route path="/faq" component={Faq} />
        </Switch>
      </div>

      <SlidingPane
        className="pane-background"
        overlayClassName="some-custom-overlay-class"
        isOpen={isPaneOpen}
        title="Go Back"
        onRequestClose={() => {setPaneOpen(false)}}
        width={paneWidth}
        hideHeader={hidePaneCloseButton}
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