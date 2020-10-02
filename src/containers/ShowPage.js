import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'

import ShowPane from './ShowPane'
import { axiosInstance } from '../constants/Axios'

function ShowPage(props) {
    const { slug } = useParams()
    const [show, setShow] = useState()
    const [errorMessage, setErrorMessage] = useState('Loading show...')
    
    function getShowBySlug(slug) {
        axiosInstance.get(`/api/read-shows/${slug}/slug/`)
        .then((res) => {
            setShow(res.data)
        })
        .catch((err) => {
            if (err.response.status == 404) {
                setErrorMessage("This show does not exist.")
            } else {
                setErrorMessage("Something went wrong.")
            }
        })
    }

    useEffect(() => {
        if (slug !== undefined) {
            getShowBySlug(slug)
        }
    }, [])

    return (
        <div>
            {
                show !== undefined ?
                <ShowPane show={show} /> :
                <div className="h4 site-font">{errorMessage}</div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        shows: state.shows.data
    }
}

export default connect(mapStateToProps, {})(ShowPage)

