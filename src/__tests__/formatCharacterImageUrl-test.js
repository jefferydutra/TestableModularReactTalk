import test from 'tape';
import formatCharacterImageUrl from '../formatCharacterImageUrl';

test('When a character thumbnail is passed in, an imageUrl is returned ', (assert) => {
    const characterThumbnail = {
        path: 'testPath',
        extension: 'png'
    };
    const expected = `${characterThumbnail.path}.${characterThumbnail.extension}`;

    const actual = formatCharacterImageUrl(characterThumbnail);
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
