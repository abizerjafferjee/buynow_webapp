import React from 'react'
import {useLocation} from 'react-router-dom'

import Image from './Image'

function Logo({className}) {
    const location = useLocation()

    const logoFile = location.pathname === '/' ?
        ('crayfish.png')
        :('crayfish.png')

    return (
        <Image
            className={className}
            src={require(`../assets/images/${logoFile}`)}
            width={300}
            height={150}
            alt="Open" />
    )
}

export default Logo