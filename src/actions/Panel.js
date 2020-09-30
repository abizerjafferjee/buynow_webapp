import { SET_SHOW, SET_PANEL_COMPONENT } from '../constants/ActionTypes'

export const setShowPanel = (show, component) => {
    return {
        type: SET_SHOW,
        show: show,
        component: component
    }
}

export const setComponent = (component) => {
    return {
        type: SET_PANEL_COMPONENT,
        payload: component
    }
}

export const setShowDisplay = (show, component) => {
    return dispatch => {
        dispatch(setShowPanel(show, component))
    }
}

export const setPanelComponent = (component) => {
    console.log(component)
    return dispatch => {
        dispatch(setComponent(component))
    }
}