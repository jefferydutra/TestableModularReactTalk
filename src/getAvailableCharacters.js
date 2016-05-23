import availableCharacters from './availableCharacters';

export default function () {
    return availableCharacters.map(character => ({
        id: character.id,
        name: character.name,
        imageUrl: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        description: character.description,
        seriesCount: character.series.available,
        series: character.series.items,
        favoriteSeriesName: '',
        urls: character.urls
    }));
}
