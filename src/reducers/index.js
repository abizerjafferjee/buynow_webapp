import { combineReducers } from 'redux'

import shows from './Shows'
import auth from './Auth'
import cart from './Cart'
import account from './Account'
import stripe from './Stripe'
import panel from './Panel'
import tickets from './Tickets'

const rootReducer = combineReducers({
    shows,
    auth,
    cart,
    account,
    stripe,
    panel,
    tickets
})

export default rootReducer