import React from 'react';
import AvailableCharacters from './Components/AvailableCharacters';
import MyFavoriteCharacters from './Components/MyFavoriteCharacters';
import getAvailableCharacters from './getAvailableCharacters';
const availableCharacters = getAvailableCharacters();
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
        }
    },

    addToFavoriteCharacters(character) {
        const myFavoriteCharacters = Object.assign(
            {},
            this.state.myFavoriteCharacters,
            {[character.id] : character}
        );
        this.setState({myFavoriteCharacters})
    },

    setAsFavoriteSeries(characterId, seriesName) {
        const updatedCharacter = Object.assign(
            {},
            this.state.myFavoriteCharacters[characterId],
            {favoriteSeriesName : seriesName}
        );

        const myFavoriteCharacters = Object.assign(
            {},
            this.state.myFavoriteCharacters,
            {[updatedCharacter.id] : updatedCharacter}
        );
        this.setState({myFavoriteCharacters})
    },

    onFilterTextChange(event) {
        const filterText = event.target.value;
        const filteredAvailableCharacters = this.state.availableCharacters.filter((character) =>
            character.name.toLowerCase().indexOf(filterText) >= 0
        );
        this.setState({
            filterText,
            filteredAvailableCharacters
        });
    },
    
    render() {
        return (
            <div>
                {this.props.title}
                <input
                    value={this.state.filterText}
                    onChange={this.onFilterTextChange} />
                <AvailableCharacters
                    addToFavoriteCharacters={this.addToFavoriteCharacters}
                    availableCharacters={this.state.filteredAvailableCharacters}/>
                <MyFavoriteCharacters
                    setAsFavoriteSeries={this.setAsFavoriteSeries}
                    myFavoriteCharacters={this.state.myFavoriteCharacters}/>
            </div>
        );
    }
});

export default App;
