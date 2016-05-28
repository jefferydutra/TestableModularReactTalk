import React from 'react';
import AvailableCharacters from './Components/AvailableCharacters';
import MyFavoriteCharacters from './Components/MyFavoriteCharacters';
import FilterBar from './Components/FilterBar';
import SectionTitle from './Components/SectionTitle';
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
        console.log(characterId, favoriteSeriesName);
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
                <h1>{this.props.title}</h1>
                <div className="container">
                    <div className="app">
                        <div className="app__menu">

                            <SectionTitle>
                                Available Characters
                            </SectionTitle>
                            <FilterBar
                                filterText={this.state.filterText}
                                title={this.props.title}
                                onFilterTextChange={this.onFilterTextChange}
                            />
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
                </div>
            </div>
        );
    }
});

export default App;
