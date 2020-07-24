import React from 'react'
import {Link} from 'react-router-dom';

import Logo from './Logo'

function Header() {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to='/'>
                    <Logo className="navbar-brand" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link to='/' className="nav-item">
                            Browse Concerts
                        </Link>
                        {/* <a className="nav-item" href="#contactUs">
                            <button className="contact-us">Contact Us</button>
                        </a> */}
                    </div>
                </div>
            </nav>
            {/*<hr></hr>*/}
        </header>
    )
}

export default Header