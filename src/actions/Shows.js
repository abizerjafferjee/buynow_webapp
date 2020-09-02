import { FETCH_SHOWS_REQUEST, FETCH_SHOWS_SUCCESS, FETCH_SHOWS_FAILURE, FILTER_SHOWS } from '../constants/ActionTypes'

// const serverUrl = 'http://localhost:8000'
import { serverUrl } from '../constants/Common'

export const fetchShowsRequest = () => {
    return {
        type: FETCH_SHOWS_REQUEST
    }
}

export const fetchShowsSuccess = (shows) => {
    return {
        type: FETCH_SHOWS_SUCCESS,
        payload: shows
    }
}

export const fetchShowsFailure = (error) => {
    return {
        type: FETCH_SHOWS_FAILURE,
        payload: error
    }
}

export const fetchShows = () => {
    return dispatch => {
        dispatch(fetchShowsRequest())
        fetch(`${serverUrl}/shows/show/`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                dispatch(fetchShowsSuccess(data))
            })
            .catch((error) => {
                dispatch(fetchShowsFailure(error))
            })
    }
}

export const filterShows = (shows) => {
    return {
        type: FILTER_SHOWS,
        payload: shows
    }
}
