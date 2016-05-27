import React from 'react';
require('./CharacterInfo.css');

function renderLink(link) {
    return (
        <li key={link.type}>
            <a href={link.url}>{link.type}</a>
        </li>
    );
}

function CharacterInfo({ character }) {
    return (
        <div className="character-info">
            <h2 className="character-info__name">{character.name}</h2>
            <p className="character-info__fav-series">
                Favorite Series: {character.favoriteSeriesName}
            </p>
            <h5>Links:</h5>
            <ul>
                {character.urls.map(renderLink)}
            </ul>
        </div>
    );
}

CharacterInfo.propTypes = {
    character: React.PropTypes.any.isRequired
};

export default CharacterInfo;
