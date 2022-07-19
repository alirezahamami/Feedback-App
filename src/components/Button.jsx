import React from 'react'
import PropTypes from 'prop-types'

//version: will define in css


function Button({text_button, version, type, isDisabled}) {
    return (
        <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
        {text_button}</button>
    )

}

Button.defaultProps = {
    version: 'primary',
    type: 'submit',
    isDisabled: false
}

Button.propTypes = {
    text_button: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}

export default Button
