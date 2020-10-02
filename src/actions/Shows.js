import { axiosInstance } from '../constants/Axios'
import { FETCH_SHOWS_REQUEST, FETCH_SHOWS_SUCCESS, FETCH_SHOWS_FAILURE, FILTER_SHOWS } from '../constants/ActionTypes'


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
        axiosInstance.get(`/api/read-shows/`, {withCredentials:true})
            .then((response) => {
                dispatch(fetchShowsSuccess(response.data))
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
