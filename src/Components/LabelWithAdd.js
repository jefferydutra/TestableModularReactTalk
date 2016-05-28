import React from 'react';
import Button from './Button';
require('./LabelWithAdd.css');

function LabelWithAdd({ children, add }) {
    return (
        <div className="label-with-add">
            <div className="label-with-add__label">{children}</div>
            <div className="label-with-add__button-section">
                <Button onClick={add}>
                    Add
                </Button>
            </div>
        </div>
    );
}

LabelWithAdd.propTypes = {
    children: React.PropTypes.string.isRequired,
    add: React.PropTypes.func.isRequired
};

module.exports = LabelWithAdd;
