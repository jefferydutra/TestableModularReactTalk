import React from 'react';
import AvailableCharacter from './AvailableCharacter';

function renderCharacter(character) {
    return (
        <AvailableCharacter
            key={character.name}
            character={character} />
    )
}

const AvailableCharacters = ({availableCharacters}) =>
    <div>
        <h4>Available Characters</h4>
        <ul>
            {availableCharacters.map(character => renderCharacter(character))}
        </ul>
    </div>;

AvailableCharacters.propTypes = {
    availableCharacters: React.PropTypes.array.isRequired
};


export default AvailableCharacters;
