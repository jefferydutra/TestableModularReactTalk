import React from 'react';
require('./SectionTitle.css');

function SectionTitle({ children }) {
    return (
        <h4 className="section-title">{children}</h4>
    );
}

SectionTitle.propTypes = {
    children: React.PropTypes.string.isRequired
};

module.exports = SectionTitle;
