import availableCharacters from './availableCharacters';
import formatCharacterImageUrl from './formatCharacterImageUrl';
import _ from 'lodash';

export default function () {
    return availableCharacters.map(character => ({
        id: character.id,
        name: character.name,
        imageUrl: formatCharacterImageUrl(character.thumbnail),
        description: character.description,
        seriesCount: character.series.available,
        series: _.takeRight(character.series.items, 4),
        favoriteSeriesName: '',
        urls: character.urls
    }));
}
