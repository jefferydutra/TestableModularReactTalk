import React from 'react';
import Series from './Series';

function renderLink(link) {
    return (
        <li key={link.type}>
            <a href={link.url}>{link.type}</a>
        </li>
    );
}


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

const MyFavoriteCharacter = ({ character, setAsFavoriteSeries }) =>
    <div className="three-column-container">
        <div className="three-column-container__left">
            <img
                width="250px"
                alt={`${character.name}`}
                src={character.imageUrl}
            />
        </div>
        <div className="three-column-container__middle">
            <div className="character-info">
                <h2 className="character-info__name">{character.name}</h2>
                <p className="character-info__fav-series">
                    Favorite Series: {character.favoriteSeriesName}
                </p>
                <h5>Links:</h5>
                <ul>
                    {character.urls.map(renderLink)}
                </ul>
            </div>
        </div>
        <div className="three-column-container__right">
            <div classID="character-series">
            <h5>Series</h5>
            {character.series.map((series) => renderSeries(series, setAsFavoriteSeries))}
            </div>
        </div>
    </div>;

MyFavoriteCharacter.propTypes = {
    character: React.PropTypes.any.isRequired,
    setAsFavoriteSeries: React.PropTypes.func.isRequired
};


export default MyFavoriteCharacter;
