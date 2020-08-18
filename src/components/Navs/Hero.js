import React from 'react'

import Input from "../Input";

function Hero() {

    function handleChange(event) {
        console.log('change')
    }

    function handleSubmit(event) {
        console.log('submit')
    }

    const formStyle = {
        margin: "0 auto",
        width: "50%"
    }

    return (
        <div className="container-fluid">
            <div className="section-container hero-container">
                <div className="section-content">
                    <p className="hero-header">Enjoy virtual concerts with Odience.</p>
                    <p className="hero-text">
                        Check out the schedules of upcoming live concerts from your favorite artists and bands.
                    </p>
                    <br></br>
                    <form style={formStyle} onSubmit={handleSubmit} className="collection-form">
                        <Input
                            id="search-collections"
                            type="text"
                            placeholder="Add our ticket number and join a live concert now"
                            onChange={handleChange}>
                            <button className="input-button btn-primary" type="submit">Join</button>
                        </Input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Hero