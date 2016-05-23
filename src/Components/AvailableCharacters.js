import React from 'react';
import AvailableCharacter from './AvailableCharacter';

function renderCharacter(character, addToFavoriteCharacters) {
    return (
        <AvailableCharacter
            key={character.name}
            addToFavoriteCharacters={addToFavoriteCharacters.bind(null, character)}
            character={character}
        />
    );
}

const AvailableCharacters = ({ availableCharacters, addToFavoriteCharacters }) =>
    <div>
        <h4>Available Characters</h4>
        <ul>
            {availableCharacters.map(character => renderCharacter(character, addToFavoriteCharacters))}
        </ul>
    </div>;

AvailableCharacters.propTypes = {
    availableCharacters: React.PropTypes.array.isRequired,
    addToFavoriteCharacters: React.PropTypes.func.isRequired
};


export default AvailableCharacters;
