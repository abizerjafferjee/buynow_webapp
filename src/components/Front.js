import React from 'react'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'

import Header from './Header';
import Hero from "./Hero";

function Front() {
    let location = useLocation()

    const front = location.pathname === '/'
    ? (
        <>
            <Header />
            <Hero />
        </>
    ) : (
        <Header />
    )

    const frontClass = classNames(
        location.pathname === '/' && 'site-background'
    )

    return (
        <div className={frontClass}>
            {front}
        </div>
    )
}

export default Front