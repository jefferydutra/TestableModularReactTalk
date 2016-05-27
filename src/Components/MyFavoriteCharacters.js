import React from 'react';
import FavoriteCharacter from './FavoriteCharacter';
import _ from 'lodash';
function setFavoriteSeriesWithId(setAsFavoriteSeries, id) {
    return () => setAsFavoriteSeries(id);
}

function renderCharacter(character, setAsFavoriteSeries) {
    return (
        <FavoriteCharacter
            key={character.name}
            setAsFavoriteSeries={setFavoriteSeriesWithId(setAsFavoriteSeries, character.id)}
            character={character}
        />
    );
}

const MyFavoriteCharacter = ({ myFavoriteCharacters, setAsFavoriteSeries }) =>
    <div className="favorite-characters-container">
        <h4 className="container-header">My Favorite Characters</h4>
        {_.map(myFavoriteCharacters, character => renderCharacter(character, setAsFavoriteSeries))}
    </div>;

MyFavoriteCharacter.propTypes = {
    myFavoriteCharacters: React.PropTypes.object.isRequired,
    setAsFavoriteSeries: React.PropTypes.func.isRequired
};


export default MyFavoriteCharacter;
