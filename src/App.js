import React from 'react';
import AvailableCharacters from './Components/AvailableCharacters';
import MyFavoriteCharacters from './Components/MyFavoriteCharacters';
import getAvailableCharacters from './getAvailableCharacters';
import getCharacterWithUpdatedFavoriteSeries from './getCharacterWithUpdatedFavoriteSeries';
const availableCharacters = getAvailableCharacters();
require('./Styles/App.css');

const App = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    getInitialState() {
        return {
            availableCharacters,
            myFavoriteCharacters: {},
            filteredAvailableCharacters: availableCharacters,
            filterText: ''
        };
    },

    onFilterTextChange(event) {
        const filterText = event.target.value;
        const filteredAvailableCharacters = this.state.availableCharacters.filter((character) =>
            character.name.toLowerCase()
                .indexOf(filterText) >= 0
        );
        this.setState({
            filterText,
            filteredAvailableCharacters
        });
    },

    setAsFavoriteSeries(characterId, favoriteSeriesName) {
        getCharacterWithUpdatedFavoriteSeries(
            this.state.myFavoriteCharacters,
            characterId,
            favoriteSeriesName
        );
    },

    addToFavoriteCharacters(character) {
        const myFavoriteCharacters = Object.assign(
            {},
            this.state.myFavoriteCharacters,
            { [character.id]: character }
        );
        this.setState({ myFavoriteCharacters });
    },

    render() {
        return (
            <div>
                <div className="available-hero-container">
                    <div className="available-hero-container__search-bar">
                        <h4 className="container-header">{this.props.title}</h4>
                        <input
                            value={this.state.filterText}
                            onChange={this.onFilterTextChange}
                        />
                    </div>
                    <AvailableCharacters
                        myFavoriteCharacters={this.state.myFavoriteCharacters}
                        addToFavoriteCharacters={this.addToFavoriteCharacters}
                        availableCharacters={this.state.filteredAvailableCharacters}
                    />
                </div>
                <MyFavoriteCharacters
                    setAsFavoriteSeries={this.setAsFavoriteSeries}
                    myFavoriteCharacters={this.state.myFavoriteCharacters}
                />
            </div>
        );
    }
});

export default App;
