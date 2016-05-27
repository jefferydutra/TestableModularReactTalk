import React from 'react';
import LabelWithAdd from './LabelWithAdd';
require('./CharacterSeriesList.css');

function setFavoriteSeriesForCharacter(setAsFavoriteSeries, name) {
    return () => setAsFavoriteSeries(name);
}

function renderSeries(series, setAsFavoriteSeries) {
    return (
        <LabelWithAdd
            key={series.name}
            add={setFavoriteSeriesForCharacter(setAsFavoriteSeries, series.name)}
        >
            {series.name}
        </LabelWithAdd>
    );
}

function CharacterSeries({ character, setAsFavoriteSeries }) {
    return (
        <div className="character-series-list">
            <span className="character-series-list__title">Series</span>
            {character.series.map((series) => renderSeries(series, setAsFavoriteSeries))}
        </div>
    );
}

CharacterSeries.propTypes = {
    character: React.PropTypes.any.isRequired,
    setAsFavoriteSeries: React.PropTypes.func.isRequired
};

export default CharacterSeries;
