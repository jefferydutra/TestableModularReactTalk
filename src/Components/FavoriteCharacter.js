import React from 'react';
import CharacterInfo from './CharacterInfo';
import CharacterSeriesList from './CharacterSeriesList';
require('./FavoriteCharacter.css');


function FavoriteCharacter(props) {
    return (
        <div className="favorite-character">
            <div className="favorite-character__details-section">
                <img
                    className="favorite-character__character-image"
                    alt={`${props.character.name}`}
                    src={props.character.imageUrl}
                />
                <CharacterInfo {...props} />
            </div>
            <div className="favorite-character__series-section ">
                <CharacterSeriesList {...props} />
            </div>
        </div>
    );
}

FavoriteCharacter.propTypes = {
    character: React.PropTypes.any.isRequired
};


export default FavoriteCharacter;
