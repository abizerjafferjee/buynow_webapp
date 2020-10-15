function getStripeKey() {
    var key = process.env.REACT_APP_STRIPE_PUBLISHABLE_TEST
    if (process.env.REACT_APP_ENVIRONMENT === 'PROD') {
        key = process.env.REACT_APP_STRIPE_PUBLISHABLE_LIVE
    }
    return key
}

export const STRIPE_PUBLISHABLE = getStripeKey()