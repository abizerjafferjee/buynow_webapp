import { combineReducers } from 'redux'

import shows from './Shows'
import auth from './Auth'
import cart from './Cart'
import account from './Account'
import panel from './Panel'
import tickets from './Tickets'
import signup from './SignUp'
import liveshow from './LiveShow'
import stripe from './Stripe'

const rootReducer = combineReducers({
    shows,
    auth,
    cart,
    account,
    panel,
    tickets,
    signup,
    liveshow,
    stripe
})

export default rootReducer