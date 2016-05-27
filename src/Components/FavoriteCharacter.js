import React from 'react';
import CharacterInfo from './CharacterInfo';
import CharacterSeriesList from './CharacterSeriesList';


function MyFavoriteCharacter(props) {
    return (
        <div className="grid">
            <div className="grid__column">
                <img
                    width="100%"
                    alt={`${props.character.name}`}
                    src={props.character.imageUrl}
                />
            </div>
            <div className="grid__column">
                <CharacterInfo {...props} />
            </div>
            <div className="grid__column">
                <CharacterSeriesList {...props} />
            </div>
        </div>
    );
}

MyFavoriteCharacter.propTypes = {
    character: React.PropTypes.any.isRequired
};


export default MyFavoriteCharacter;
