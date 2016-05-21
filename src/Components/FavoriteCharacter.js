import React from 'react';

const MyFavoriteCharacter = ({character}) =>
    <div>
        {character.name}
    </div>;

MyFavoriteCharacter.propTypes = {
    character: React.PropTypes.any.isRequired
};


export default MyFavoriteCharacter;
