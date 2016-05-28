import React from 'react';
require('./FilterBar.css');

function FilterBar({ filterText, onFilterTextChange }) {
    return (
        <div className="filter-bar">
            <input
                placeholder="filter characters .."
                className="filter-bar__input"
                value={filterText}
                onChange={onFilterTextChange}
            />
        </div>
    );
}

FilterBar.propTypes = {
    title: React.PropTypes.string.isRequired,
    filterText: React.PropTypes.string.isRequired,
    onFilterTextChange: React.PropTypes.func.isRequired
};

module.exports = FilterBar;
