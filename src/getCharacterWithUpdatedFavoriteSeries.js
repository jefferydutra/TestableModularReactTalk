export default function (characters, characterId, favoriteSeriesName) {
    if (!characters[characterId]) return characters;

    const updatedCharacter = Object.assign(
        {},
        characters[characterId],
        { favoriteSeriesName }
    );

    return Object.assign(
        {},
        characters,
        { [updatedCharacter.id]: updatedCharacter }
    );
}
