import React from 'react';
import AvailableCharacter from './AvailableCharacter';

function addToFavoriteWithCharacter(addToFavorite, character) {
    return () => addToFavorite(character);
}

function renderCharacter(character, addToFavoriteCharacters) {
    return (
        <AvailableCharacter
            key={character.name}
            addToFavoriteCharacters={addToFavoriteWithCharacter(addToFavoriteCharacters, character)}
            character={character}
        />
    );
}

const AvailableCharacters = ({ availableCharacters, addToFavoriteCharacters }) =>
    <div className="available-hero-container__select-list">
        <h4 className="container-header">Available Characters</h4>
        {availableCharacters.map(character => renderCharacter(character, addToFavoriteCharacters))}
    </div>;

AvailableCharacters.propTypes = {
    availableCharacters: React.PropTypes.array.isRequired,
    addToFavoriteCharacters: React.PropTypes.func.isRequired
};


export default AvailableCharacters;
