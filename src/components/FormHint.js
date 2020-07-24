import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    children: PropTypes.node,
    status: PropTypes.string
}

const defaultProps = {
    children: null,
    status: ''
}

function FormHint({children, className, status, ...props}) {

    return (
        <div className="alert alert-warning" role="alert">
            {children}
        </div>
    )
}

FormHint.propTypes = propTypes
FormHint.defaultProps = defaultProps

export default FormHint