import React from 'react';
import classNames from 'classnames';
require('./HeroCard.css');

function renderButtonIfNotFavorite(isFavorite, addToFavoriteCharacters) {
    if (isFavorite) return null;

    return (
        <button onClick={addToFavoriteCharacters}>
            Add
        </button>
    );
}

function AvailableCharacter({ character, addToFavoriteCharacters, isFavorite }) {
    const className = classNames('hero-card', {
        'hero-card--isFavorite ': isFavorite
    });
    return (
        <div className={className}>
            <img
                className="hero-card__image"
                alt={`character ${character.name}`}
                src={character.imageUrl}
            />
            <div>
                <h4 className="hero-card__name">{character.name}
                    (Series Count: {character.seriesCount})</h4>
                {renderButtonIfNotFavorite(isFavorite, addToFavoriteCharacters)}
            </div>
        </div>
    );
}

AvailableCharacter.propTypes = {
    character: React.PropTypes.any.isRequired,
    isFavorite: React.PropTypes.bool.isRequired,
    addToFavoriteCharacters: React.PropTypes.any.isRequired
};


export default AvailableCharacter;
