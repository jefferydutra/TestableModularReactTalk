import React from 'react';

const AvailableCharacter = ({ character, addToFavoriteCharacters, isFavorite }) =>
    <div className="select-list__hero-card">
        <img
            alt={`character ${character.name}`}
            src={character.imageUrl}

        />
        {isFavorite}
        <div>
            <h4 className="hero-card__name">{character.name} (Series Count: {character.seriesCount})</h4>
            <button onClick={addToFavoriteCharacters}>
                Add to Favorites
            </button>
        </div>
    </div>;

AvailableCharacter.propTypes = {
    character: React.PropTypes.any.isRequired,
    isFavorite: React.PropTypes.bool.isRequired,
    addToFavoriteCharacters: React.PropTypes.any.isRequired
};


export default AvailableCharacter;
