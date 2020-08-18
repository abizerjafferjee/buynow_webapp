import { combineReducers } from 'redux'

import shows from './Shows'
import auth from './Auth'
import cart from './Cart'
import billing from './Billing'

const rootReducer = combineReducers({
    shows,
    auth,
    cart,
    billing
})

export default rootReducer