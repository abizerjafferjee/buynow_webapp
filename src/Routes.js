import React from 'react'
import { Route, Switch } from 'react-router-dom';

import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
// import Dashboard from './containers/Dashboard';
import LiveStage from './containers/LiveStage';
import SignIn from './containers/SignIn';
import Privacy from './components/Privacy'

function Routes (props) {
    return (
        <Switch>
            <AuthenticatedRoute exact path="/">
                <LiveStage />
            </AuthenticatedRoute>
            <UnauthenticatedRoute exact path="/signin"> 
                <SignIn />
            </UnauthenticatedRoute>
            <Route exact path="/privacy"> 
                <Privacy />
            </Route>
        </Switch>
    )
}

export default Routes