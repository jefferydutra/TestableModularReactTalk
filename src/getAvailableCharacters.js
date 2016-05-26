import availableCharacters from './availableCharacters';
import formatCharacterImageUrl from './formatCharacterImageUrl';

export default function () {
    return availableCharacters.map(character => ({
        id: character.id,
        name: character.name,
        imageUrl: formatCharacterImageUrl(character.thumbnail),
        description: character.description,
        seriesCount: character.series.available,
        series: character.series.items,
        favoriteSeriesName: '',
        urls: character.urls
    }));
}
