import React from 'react';

const Series = ({ series, setAsFavoriteSeries }) =>
    <div>
        <h4>{series.name}</h4>
        <button onClick={setAsFavoriteSeries}>
            Add to Favorites
        </button>
    </div>;

Series.propTypes = {
    series: React.PropTypes.object.isRequired,
    setAsFavoriteSeries: React.PropTypes.func.isRequired
};


export default Series;
