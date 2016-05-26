import test from 'tape';
import deepFreeze from 'deep-freeze';
import isFavoriteCharacter from '../isFavoriteCharacter';

function createCharacter(id) {
    return { id };
}

test('When character exists in favorite characters than return true', (assert) => {
    const characterIdToCheck = 6;
    const character = createCharacter(characterIdToCheck);
    const otherCharacter = createCharacter(7);
    const characters = {
        [character.id]: character,
        [otherCharacter.id]: character
    };

    deepFreeze(character);
    deepFreeze(characters);

    const expected = true;
    const actual = isFavoriteCharacter(characters, character);

    assert.equal(actual, expected);

    assert.end();
});

test('When character does not exist in favorite characters than return false', (assert) => {
    const character = createCharacter(6);
    const otherCharacter = createCharacter(7);
    const characters = {
        [otherCharacter.id]: otherCharacter
    };

    deepFreeze(characters);
    const expected = false;
    const actual = isFavoriteCharacter(characters, character);

    assert.equal(actual, expected);

    assert.end();
});
