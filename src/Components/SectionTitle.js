import React from 'react';
require('./SectionTitle.css');

function SectionTitle({ children }) {
    return (
        <h2 className="section-title">{children}</h2>
    );
}

SectionTitle.propTypes = {
    children: React.PropTypes.string.isRequired
};

module.exports = SectionTitle;
