import React from 'react';
import FavoriteCharacter from './FavoriteCharacter';
import _ from 'lodash';

function renderCharacter(character, setAsFavoriteSeries) {
    return (
        <FavoriteCharacter
            key={character.name}
            setAsFavoriteSeries={setAsFavoriteSeries.bind(null, character.id)}
            character={character} />
    )
}

const MyFavoriteCharacter = ({myFavoriteCharacters, setAsFavoriteSeries}) =>
    <div>
        <h4>My Favorite Characters</h4>
        <ul>
            {_.map(myFavoriteCharacters, character => renderCharacter(character, setAsFavoriteSeries))}
        </ul>
    </div>;

MyFavoriteCharacter.propTypes = {
    myFavoriteCharacters: React.PropTypes.object.isRequired,
    setAsFavoriteSeries: React.PropTypes.func.isRequired
};


export default MyFavoriteCharacter;
