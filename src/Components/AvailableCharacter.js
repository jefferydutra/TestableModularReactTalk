import React from 'react';

const AvailableCharacter = ({character, addToFavoriteCharacters}) =>
    <div>
        <div>
            <img
                width="100px"
                src={character.imageUrl}/>
        </div>
        <div>
            <h4>{character.name} (Series Count: {character.seriesCount})</h4>
            <button onClick={addToFavoriteCharacters}>
                Add to Favorites
            </button>
        </div>
    </div>;

AvailableCharacter.propTypes = {
    character: React.PropTypes.any.isRequired
};


export default AvailableCharacter;
