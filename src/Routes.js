import React from 'react'
import { useLocation, Switch, Route } from 'react-router-dom';

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
            <Route exact path="/" component={Home} />
            <Route exact path="/shows/:slug" component={ShowPage} />
            <Route exact path="/tickets/:status/:uuid" component={Confirm} />
            <Route exact path="/live" component={LivePage} />
            <Route path="/live/:ticket" component={PlayerPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/account" component={AccountPage} />
            <Route path="/reset/:token" component={ResetPassword} />
            <Route path={["/policies", "/policies/:doc"]} component={Policies} />
            <Route path="/faq" component={Faq} />
        </Switch>
    )
}

export default Routes