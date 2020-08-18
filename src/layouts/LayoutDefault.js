import React from 'react';

// import Front from '../components/Front'
import Header from '../components/Navs/Header';
import Footer from '../components/Navs/Footer';

function LayoutDefault(props) {

    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer className="container-fluid section-container pt-5" />
        </>

    )
}

export default LayoutDefault;  