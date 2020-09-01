
const panel = (state={}, action={}) => {
    switch (action.type) {
        case 'SET_SHOW':
            return {
                id: action.payload
            }
        default:
            return state
    }
}

export default panel