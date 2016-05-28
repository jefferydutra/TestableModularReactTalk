import React from 'react';
import classNames from 'classnames';
import Button from './Button';
require('./HeroCard.css');

function renderButtonIfNotFavorite(isFavorite, addToFavoriteCharacters) {
    if (isFavorite) return null;

    return (
        <Button onClick={addToFavoriteCharacters}>
            Add
        </Button>
    );
}

function AvailableCharacter({ character, addToFavoriteCharacters, isFavorite }) {
    const className = classNames('hero-card', {
        'hero-card--isFavorite ': isFavorite
    });
    return (
        <div className={className}>
            <div className="hero-card__image-section">
                <img
                    className="hero-card__image"
                    alt={`character ${character.name}`}
                    src={character.imageUrl}
                />
            </div>
            <div className="hero-card__information">
                <h4 className="hero-card__name">{character.name} -
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
