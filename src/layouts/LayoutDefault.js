import React from 'react';

import Front from '../components/Front'
import Footer from '../components/Footer';

function LayoutDefault(props) {

    return (
        <>
            <Front />
            <main>
                {props.children}
            </main>
            <Footer className="container-fluid section-container pt-5" />
        </>

    )
}

export default LayoutDefault;  