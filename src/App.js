import React from 'react';
import AvailableCharacters from './Components/AvailableCharacters';
import MyFavoriteCharacters from './Components/MyFavoriteCharacters';
import availableCharacters from '../availableCharacters';
const myFavoriteCharacters = [availableCharacters[0]];

const App = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    getInitialState() {
        return {
            availableCharacters,            
            myFavoriteCharacters,
            filteredAvailableCharacters: availableCharacters,
            filterText: ''
        }
    },

    render() {
        return (
            <div>
                {this.props.title}
                <input />
                <AvailableCharacters availableCharacters={filteredAvailableCharacters}/>
                <MyFavoriteCharacters {...props} />
            </div>
        );
    }
});

export default App;
