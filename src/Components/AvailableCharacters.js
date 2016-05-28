import React from 'react';
import AvailableCharacter from './HeroCard';
import isFavoriteCharacter from '../isFavoriteCharacter';

function addToFavoriteWithCharacter(addToFavorite, character) {
    return () => addToFavorite(character);
}

function renderCharacter(character, addToFavoriteCharacters, myFavoriteCharacters) {
    return (
        <AvailableCharacter
            key={character.name}
            isFavorite={isFavoriteCharacter(myFavoriteCharacters, character)}
            addToFavoriteCharacters={addToFavoriteWithCharacter(addToFavoriteCharacters, character)}
            character={character}
        />
    );
}

const AvailableCharacters = ({ availableCharacters, addToFavoriteCharacters, myFavoriteCharacters }) =>
    <div className="heroMenu">
        {availableCharacters.map(character => renderCharacter(
            character,
            addToFavoriteCharacters,
            myFavoriteCharacters))}
    </div>;

AvailableCharacters.propTypes = {
    availableCharacters: React.PropTypes.array.isRequired,
    myFavoriteCharacters: React.PropTypes.object.isRequired,
    addToFavoriteCharacters: React.PropTypes.func.isRequired
};


export default AvailableCharacters;
