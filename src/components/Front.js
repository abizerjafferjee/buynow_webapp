import React from 'react'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'

import Header from './Navs/Header';
import Hero from "./Navs/Hero";

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