import React from 'react';
import { render } from 'react-dom';
import App from './src/App';

render(
    <App
        title="Marvel Selector"
        myFavoriteCharacters={myFavoriteCharacters}
        availableCharacters={availableCharacters}
    />,
    document.getElementById('app')
);