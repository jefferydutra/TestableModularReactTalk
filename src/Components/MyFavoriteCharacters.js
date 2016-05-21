import React from 'react';
import FavoriteCharacter from './FavoriteCharacter';

function renderCharacter(character) {
    return (
        <FavoriteCharacter
            key={character.name}
            character={character} />
    )
}

const MyFavoriteCharacter = ({myFavoriteCharacters}) =>
    <div>
        <h4>My Favorite Characters</h4>
        <ul>
            {myFavoriteCharacters.map(character => renderCharacter(character))}
        </ul>
    </div>;

MyFavoriteCharacter.propTypes = {
    myFavoriteCharacters: React.PropTypes.array.isRequired
};


export default MyFavoriteCharacter;
