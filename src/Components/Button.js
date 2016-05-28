import React from 'react';
import classNames from 'classnames';
require('./Button.css');


function Button({ children, onClick, isDisabled }) {
    const className = classNames('button', {
        'button--isDisabled ': isDisabled
    });
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
    isDisabled: React.PropTypes.bool
};

module.exports = Button;
