import React from 'react';
import CharacterInfo from './CharacterInfo';
import CharacterSeriesList from './CharacterSeriesList';


function MyFavoriteCharacter(props) {
    return (
        <div className="three-column-container">
            <div className="three-column-container__left">
                <img
                    width="250px"
                    alt={`${props.character.name}`}
                    src={props.character.imageUrl}
                />
            </div>
            <div className="three-column-container__middle">
                <CharacterInfo {...props} />
            </div>
            <div className="three-column-container__right">
                <CharacterSeriesList {...props} />
            </div>
        </div>
    );
}

MyFavoriteCharacter.propTypes = {
    character: React.PropTypes.any.isRequired
};


export default MyFavoriteCharacter;
