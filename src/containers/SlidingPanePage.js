import React from 'react'

import AccountPage from './AccountPage';
import CartPage from './CartPage'

function SlidingPanePage(props) {

    if (props.component === 'account') {
        return <AccountPage />
    } else if (props.component === 'cart') {
        return <CartPage />
    }

}

export default SlidingPanePage