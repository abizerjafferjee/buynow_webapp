import React, {useState, useEffect} from 'react';

import Input from "./Input";
import GridGenerator from "./GridGenerator";

function Collections() {

    const [search, setSearch] = useState('')
    const [collections, setCollections] = useState([
        {title:"Billy strings", description: "Live from the basement", url:""},
        {title:"Guitar hero", description: "Live from the studio", url:""},
        {title:"MnM", description: "Live from the garage", url:""},
        {title:"Magic beans", description: "Live from madison square", url:""},
        {title:"The goose", description: "Live from city hall", url:""},
        {title:"Aquaphina", description: "Live from the prisons", url:""},
        {title:"Mc Gee", description: "Live from whererever", url:""},
        {title:"Mr. OG", description: "Live!", url:""}
    ])
    const [searchError, setSearchError] = useState(false)
    const postPerRow = window.innerWidth < 500 ? 1 : 3

    useEffect(() => {
        console.log('hello')
    }, [])

    function handleChange(event) {
        console.log('change')
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log('submit')
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
                                    <a href={value.url} className="card-title text-primary">
                                        {value.title}
                                    </a>
                                    <div className="card-text">
                                        {value.description}
                                    </div>
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

export default Collections