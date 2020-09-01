import { SET_SHOW } from '../constants/ActionTypes'

export const setShowPanel = (id) => {
    return {
        type: 'SET_SHOW',
        payload: id
    }
}

export const setShowDisplay = (id) => {
    return dispatch => {
        dispatch(setShowPanel(id))
    }
}