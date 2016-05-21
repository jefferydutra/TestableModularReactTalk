import React from 'react';

const AvailableCharacter = ({character}) =>
    <div>
        {character.name}
    </div>;

AvailableCharacter.propTypes = {
    character: React.PropTypes.any.isRequired
};


export default AvailableCharacter;
