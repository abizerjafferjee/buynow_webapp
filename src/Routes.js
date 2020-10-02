import React from 'react'
import { useLocation, Switch, Route } from 'react-router-dom';

import withTracker from './helpers/withTracker'
import Home from './containers/HomePage';
import AccountPage from './containers/AccountPage';
import CartPage from './containers/CartPage'
import ShowPage from './containers/ShowPage'
import LivePage from './containers/LivePage'
import PlayerPage from './containers/PlayerPage'
import Confirm from './containers/ConfirmPage.js'
import Policies from './components/Static/Policies.js'
import Faq from './components/Static/Faq.js'
import ResetPassword from './containers/ResetPassword.js'

function Routes (props) {
    return (
        <Switch>
            <Route exact path="/" component={withTracker(Home)} />
            <Route exact path="/shows/:slug" component={withTracker(ShowPage)} />
            <Route exact path="/tickets/:status/:uuid" component={withTracker(Confirm)} />
            <Route exact path="/live" component={withTracker(LivePage)} />
            <Route path="/live/:ticket" component={withTracker(PlayerPage)} />
            <Route exact path="/cart" component={withTracker(CartPage)} />
            <Route exact path="/account" component={withTracker(AccountPage)} />
            <Route path="/reset/:token" component={withTracker(ResetPassword)} />
            <Route path={["/policies", "/policies/:doc"]} component={withTracker(Policies)} />
            <Route path="/faq" component={withTracker(Faq)} />
        </Switch>
    )
}

export default Routes