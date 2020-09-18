import React, {useState, useEffect} from 'react'
import { List } from 'semantic-ui-react'
import { useParams, useLocation } from 'react-router-dom'

import {TermsOfSales, TermsOfService, PrivacyPolicy, BroadCasterAgreement} from './PolicyDocuments'

function Policies() {

    const [policy, setPolicy] = useState(null)
    const { pathname } = useLocation()

    useEffect(() => {
        const paths = pathname.split('/')
        if (paths.length > 2) {
            setPolicy(paths[2])
        }
    }, [])

    function getPolicy(policy) {
        if (policy === 'terms-of-sale') {
            return <TermsOfSales />
        } else if (policy === 'terms-of-service') {
            return <TermsOfService />
        } else if (policy === 'privacy-policy') {
            return <PrivacyPolicy />
        } else if (policy === 'broadcaster-agreement') {
            return <BroadCasterAgreement />
        } else {
            return <p className="site-font">Select a policy document</p>
        }
    }

    const linkStyle = {
        cursor: 'pointer'
    }

    return (
        <div>
            <div className="h3 site-font">Policies</div>
            <ul className="h5 site-font">
                <li style={linkStyle} onClick={() => (setPolicy('terms-of-sale'))}>Terms of Sale</li>
                <li style={linkStyle} onClick={() => (setPolicy('terms-of-service'))}>Terms of Service</li>
                <li style={linkStyle} onClick={() => (setPolicy('privacy-policy'))}>Privacy Policy</li>
                <li style={linkStyle} onClick={() => (setPolicy('broadcaster-agreement'))}>Broadcaster Agreement</li>
            </ul>
            <div className="m-5 p-5">
                { getPolicy(policy) }
            </div>
        </div>


    )
}

export default Policies