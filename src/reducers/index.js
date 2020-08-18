import { combineReducers } from 'redux'

import shows from './Shows'
import auth from './Auth'
import cart from './Cart'

const rootReducer = combineReducers({
    shows,
    auth,
    cart
})

export default rootReducer