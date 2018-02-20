import React from 'react';
import {observe, observable} from 'mobx';
import ReactDOM from 'react-dom';
import {uriToState, stateToUri} from './routing';
import App from './components/App';
import DataModel from './DataModel';

const rootElement = document.getElementById('root');

function restartApp(flights = null) {

    const dataModel = new DataModel(newStateCallback);
    dataModel.search = observable(uriToState(window.document.location));

    if (flights) {
        dataModel.flights = observable(flights);
    }

    if (dataModel.search.from.id !== '' && dataModel.search.to.id !== '') {
        dataModel.searchFlights(false);
    }


    function newStateCallback() {
        const uri = stateToUri(dataModel.flights.search);
        window.history.pushState({}, window.document.title, uri);
    }


    window.onpopstate = () => restartApp(dataModel.flights);

    ReactDOM.render(<App dataModel={dataModel}/>, rootElement);
}

restartApp();