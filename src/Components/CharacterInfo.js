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
            <h3 className="character-info__name">{character.name}</h3>
            <h3 className="character-info__fav-series">
                Favorite Series: {character.favoriteSeriesName}
            </h3>
            <h3>Links:</h3>
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
