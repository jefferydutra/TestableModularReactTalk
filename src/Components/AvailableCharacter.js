import React from 'react';
import classnames from 'classnames';


function AvailableCharacter({ character, addToFavoriteCharacters, isFavorite }) {

    const className = classnames({
        'select-list__hero-card': !isFavorite,
        'select-list__hero-card isFavorite': isFavorite
    });
    return (
        <div className={className}>
            <img
                alt={`character ${character.name}`}
                src={character.imageUrl}

            />
            <div>
                <h4 className="hero-card__name">{character.name}
                    (Series Count: {character.seriesCount})</h4>
                <button onClick={addToFavoriteCharacters}>
                    Add to Favorites
                </button>
            </div>
        </div>
    )
}

AvailableCharacter.propTypes = {
    character: React.PropTypes.any.isRequired,
    isFavorite: React.PropTypes.bool.isRequired,
    addToFavoriteCharacters: React.PropTypes.any.isRequired
};


export default AvailableCharacter;
