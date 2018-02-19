import React from 'react';
import {observe, observable} from 'mobx';
import ReactDOM from 'react-dom';
import debounce from 'lodash/debounce';
import {uriToState, stateToUri} from './routing';
import App from './components/App';
import DataModel from './DataModel';

const rootElement = document.getElementById('root');

function restartApp() {

    const dataModel = new DataModel();
    dataModel.search = observable(uriToState(window.document.location));


    if (dataModel.search.from.id !== '' && dataModel.search.to.id !== '') {
        dataModel.searchFlights();
    }


    function observer() {
        window.history.pushState({}, window.document.title, stateToUri(dataModel.flights.search));
    }

    observe(dataModel.flights, debounce(observer,200));

    window.onpopstate = restartApp;

    //rootElement.innerHTML = '';
    ReactDOM.render(<App dataModel={dataModel}/>, rootElement);
}

restartApp();