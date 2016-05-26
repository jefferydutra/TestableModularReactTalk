import test from 'tape';
import deepFreeze from 'deep-freeze';

import formatCharacterImageUrl from '../formatCharacterImageUrl';

test('ImageUrl generated from thumbnail object ', (assert) => {
    const thumbnail = {
        path: 'testPath',
        extension: 'png'
    };
    deepFreeze(thumbnail);
    const expected = `${thumbnail.path}.${thumbnail.extension}`;

    const actual = formatCharacterImageUrl(thumbnail);
    assert.equal(actual, expected);

    assert.end();
});

test('When a character thumbnail is null, a null is returned ', (assert) => {
    const characterThumbnail = null;

    const actual = formatCharacterImageUrl(characterThumbnail);
    assert.equal(actual, null);

    assert.end();
});

test('When a character thumbnail path is undefined, a null imageUrl is returned ', (assert) => {
    const characterThumbnail = { extension: 'png' };

    const actual = formatCharacterImageUrl(characterThumbnail);
    assert.equal(actual, null);

    assert.end();
});


test('When a character thumbnail extension is undefined, a null imageUrl is returned ', (assert) => {
    const characterThumbnail = {
        path: null,
        extension: 'png'
    };
    const actual = formatCharacterImageUrl(characterThumbnail);
    assert.equal(actual, null);

    assert.end();
});
