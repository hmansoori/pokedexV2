import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var baseUrl = "https://pokeapi.co/api/v2/";

function buildUrl(call, input) {
    //categories [berries, contests, encounters, evolution, games, items, locations, machines, moves, pokemon]
    var requestUrl = baseUrl + call + '/' + input;
    return requestUrl;
}

function searchPokemon(url) {
    fetch(url).then(res => res.json())
    .then((result) => {
        return result;
    },
    (error) => {
        console.error(error);
        return error;
    })
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
