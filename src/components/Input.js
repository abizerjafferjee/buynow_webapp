import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import FormLabel from "./FormLabel";
import FormHint from "./FormHint";

const propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
    labelHidden: PropTypes.bool,
    type: PropTypes.oneOf(['textarea', 'text', 'email', 'tel', 'password', 'number', 'search', 'color', 'date',
                                 'time', 'datetime-local', 'radio']),
    name: PropTypes.string,
    status: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    formGroup: PropTypes.string,
    hasIcon: PropTypes.string,
    size: PropTypes.string,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    hint: PropTypes.string,
    checked: PropTypes.bool
}

const defaultProps = {
    children: null,
    label: '',
    labelHidden: false,
    type: 'text',
    name: undefined,
    status: '',
    disabled: false,
    value: undefined,
    formGroup: null,
    hasIcon: null,
    size: '',
    placeholder: '',
    rows: 3,
    hint: null,
    checked: false
}

function Input({className, children, label, labelHidden, type, name, status, disabled, value, formGroup, hasIcon, size,
                   placeholder, rows, hint, checked, ...props}) {

    const wrapperClass = classNames(
        type!=='radio' && 'form-group'
    )

    const inputClass = classNames(
        type!=='radio' && 'form-input',
        type!=='radio' && 'form-control',
        className
    )

    const Component = type === 'textarea' ? 'textarea': 'input'
    return (
        <>
            {
                label &&
                <FormLabel labelHidden={labelHidden} id={props.id}>
                    {label}
                </FormLabel>
            }

            <div className={wrapperClass}>
                <Component
                    {...props}
                    className={inputClass}
                    type={type !== 'textarea' ? type:null}
                    name={name}
                    value={value}
                    disabled={disabled}
                    placeholder={placeholder}
                    checked={type==='radio'? checked:null}
                    rows={type==='textarea' ? rows:null}
                />
                {children}
            </div>

            {
                hint &&
                <FormHint status={status}>
                    {hint}
                </FormHint>
            }

        </>
    )
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input