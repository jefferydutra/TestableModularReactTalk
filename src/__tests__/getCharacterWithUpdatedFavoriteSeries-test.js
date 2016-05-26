import test from 'tape';
import getCharacterWithUpdatedFavoriteSeries from '../getCharacterWithUpdatedFavoriteSeries';

function getCharacterWithId(id) {
    return { id };
}

test('Favorite Series is added to character', (assert) => {
    const favoriteSeriesName = 'testValue';
    const characterId = 5;
    const testCharacter = getCharacterWithId(characterId);
    const characters = {
        [testCharacter.id]: testCharacter
    };

    const expected = characters;
    expected[characterId] = Object.assign(
        {},
        characters[characterId],
        { favoriteSeriesName }
    );

    const actual = getCharacterWithUpdatedFavoriteSeries(characters, characterId, favoriteSeriesName);
    assert.deepEqual(actual, expected);

    assert.end();
});


test('Original character collection is returned if character does not exist', (assert) => {
    const characterId = 5;
    const testCharacter = getCharacterWithId(characterId);
    const characterIdThatDoesNotExist = 6;
    const expected = {
        [testCharacter.id]: testCharacter
    };

    const actual = getCharacterWithUpdatedFavoriteSeries(expected, characterIdThatDoesNotExist, 'test');
    assert.deepEqual(actual, expected);

    assert.end();
});
