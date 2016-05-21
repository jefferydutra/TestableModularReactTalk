import React from 'react';
import AvailableCharacters from './Components/AvailableCharacters';
import MyFavoriteCharacters from './Components/MyFavoriteCharacters';

const App = (props) =>
    <div>
        {props.title}
        <AvailableCharacters {...props} />
        <MyFavoriteCharacters {...props} />
    </div>;

App.propTypes = {
    title: React.PropTypes.string.isRequired
};

export default App;
