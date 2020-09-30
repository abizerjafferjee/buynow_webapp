import { SET_SHOW, SET_PANEL_COMPONENT } from '../constants/ActionTypes'

const panel = (state={}, action={}) => {
    console.log(action)
    switch (action.type) {
        case SET_SHOW:
            return {
                show: action.show,
                component: action.component
            }
        case SET_PANEL_COMPONENT:
            return {
                component: action.payload
            }
        default:
            return state
    }
}

export default panel