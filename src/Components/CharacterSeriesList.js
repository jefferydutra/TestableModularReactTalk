import React from 'react';
import Series from './Series';
require('./CharacterSeriesList.css');

function setFavoriteSeriesForCharacter(setAsFavoriteSeries, name) {
    return () => setAsFavoriteSeries(name);
}

function renderSeries(series, setAsFavoriteSeries) {
    return (
        <Series
            series={series}
            key={series.name}
            setAsFavoriteSeries={setFavoriteSeriesForCharacter(setAsFavoriteSeries, series.name)}
        />
    );
}

function CharacterSeries({ character, setAsFavoriteSeries }) {
    return (
        <div className="character-series">
            <h5>Series</h5>
            {character.series.map((series) => renderSeries(series, setAsFavoriteSeries))}
        </div>
    );
}

CharacterSeries.propTypes = {
    character: React.PropTypes.any.isRequired,
    setAsFavoriteSeries: React.PropTypes.func.isRequired
};

export default CharacterSeries;
