import React from 'react';
import SectionTitle from './SectionTitle';
require('./FilterBar.css');

function FilterBar({ title, filterText, onFilterTextChange }) {
    return (
        <div className="filter-bar">
            <SectionTitle>
                {title}
            </SectionTitle>
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
