import React from 'react';
import FavoriteCharacter from './FavoriteCharacter';
import SectionTitle from './SectionTitle';
require('./MyFavoriteCharacters.css');
import _ from 'lodash';

function renderCharacter(character, setAsFavoriteSeries) {
    return (
        <FavoriteCharacter
            key={character.name}
            setAsFavoriteSeries={setAsFavoriteSeries}
            character={character}
        />
    );
}

const MyFavoriteCharacter = ({ myFavoriteCharacters, setAsFavoriteSeries }) =>
    <div className="app__content">
        <SectionTitle>My Favorite Characters</SectionTitle>
        <div className="my-favorite-characters">
            {_.map(myFavoriteCharacters, character => renderCharacter(character, setAsFavoriteSeries))}
        </div>
    </div>;

MyFavoriteCharacter.propTypes = {
    myFavoriteCharacters: React.PropTypes.object.isRequired,
    setAsFavoriteSeries: React.PropTypes.func.isRequired
};


export default MyFavoriteCharacter;
