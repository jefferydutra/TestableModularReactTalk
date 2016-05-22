import React from 'react';
import Series from './Series';

function renderLink(link) {
    return (
        <li key={link.type}>
            <a href={link.url}>{link.type}</a>
        </li>
    );
}


function renderSeries(series, setAsFavoriteSeries) {
    return (
        <Series
            series={series}
            key={series.name}
            setAsFavoriteSeries={setAsFavoriteSeries.bind(null, series.name)}/>
    );
}

const MyFavoriteCharacter = ({character, setAsFavoriteSeries}) =>
    <div>
        <div>
            <img
                width="250px"
                src={character.imageUrl}/>
        </div>
        <div>
            <h4>{character.name}</h4>
            <p>

            </p>
            <p>
                Favorite Series: {character.favoriteSeriesName}
            </p>
            <h5>Links:</h5>
            <ul>
                {character.urls.map(renderLink)}
            </ul>
        </div>

        <div>
            <h5>Series</h5>
            {character.series.map( (series) => renderSeries(series, setAsFavoriteSeries))}
        </div>
    </div>;

MyFavoriteCharacter.propTypes = {
    character: React.PropTypes.any.isRequired
};


export default MyFavoriteCharacter;
