import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Card } from 'semantic-ui-react'

import Input from "./Input";
import GridGenerator from "./GridGenerator";

function ShowList() {

    const [search, setSearch] = useState('')
    const [collections, setCollections] = useState([])
    const [searchError, setSearchError] = useState(false)
    const postPerRow = window.innerWidth < 500 ? 1 : 3
    const serverUrl = 'http://localhost:8000'

    function getCollections(url) {
        fetch(url)
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                setCollections(data)
                setSearchError(false)
            })
            .catch(function(response) {
                setSearchError(true)
            })
    }

    useEffect(() => {
        const url = `${serverUrl}/shows/show/`
        getCollections(url)
    }, [])

    function handleChange(event) {
        const {id, value} = event.target
        if (id === 'search-collections') {
            setSearch(value)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        const url = `${serverUrl}/shows/show?search=${search}&search_fields=title`
        getCollections(url)
    }

    function addToCart(show) {
        console.log(show)
        console.log("cart to cart")
    }

    return (
        <>
            <div className="container-fluid">
                <div className="section-container collection-container">
                    <div className="section-content">
                        <p className="collection-header">Search upcoming concerts.</p>
                        <form onSubmit={handleSubmit} className="collection-form">
                            <Input
                                id="search-collections"
                                type="text"
                                placeholder="Search artists, bands, events or genres"
                                value={search}
                                onChange={handleChange}>
                                <button className="input-button btn-primary" type="submit">Search</button>
                            </Input>
                        </form>
                        { searchError && <small className="text-danger">Something went wrong.</small> }
                    </div>
                </div>
            </div>
            <div className="container-fluid section-container">
                <GridGenerator cols={postPerRow}>
                {
                    collections.map((value, index) => {
                        return (
                            <div key={index} className="card m-1">
                                <div className="card-body">
                                    <a href="" className="card-title text-primary">
                                        {value.title}
                                    </a>
                                    <button className="card-text" onClick={() => addToCart(value.id)}>
                                        add to card
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
                </GridGenerator>
            </div>
            <br></br>
        </>
    )
}

export default ShowList