import React from 'react'
import classNames from 'classnames'

// import Subscribe from './Subscribe'

function Footer({className}) {

    const footerClass= classNames(
        className,
        'site-background'
    );

    return (
        <footer className={footerClass}>
            <div className="row pt-3">
                <div className="col">

                </div>
                <div className="col">
                    {/*<Subscribe />*/}
                </div>
            </div>
            <div className="footer-copyright text-center py-3 footer-content">
                    Odience © 2020 Copyright
            </div>
        </footer>
    )
}

export default Footer