import React from 'react';
import { render } from 'react-dom';
import App from './src/App';
import availableCharacters from './availableCharacters';
const myFavoriteCharacters = [availableCharacters[0]];

render(
    <App
        title="Marvel Selector"
        myFavoriteCharacters={myFavoriteCharacters}
        availableCharacters={availableCharacters}
    />,
    document.getElementById('app')
);