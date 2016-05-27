import React from 'react';
require('./LabelWithAdd.css');

function LabelWithAdd({ children, add }) {
    return (
        <div className="label-with-add">
            <div className="label-with-add__label">{children}</div>
            <button className="label-with-add__button" onClick={add}>
                Add
            </button>
        </div>
    );
}

LabelWithAdd.propTypes = {
    children: React.PropTypes.string.isRequired,
    add: React.PropTypes.func.isRequired
};

module.exports = LabelWithAdd;
