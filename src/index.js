import React from 'react';
import {observe, observable} from 'mobx';
import ReactDOM from 'react-dom';
//import debounce from 'lodash/debounce';
import {uriToState, stateToUri} from './routing';
import App from './components/App';
import DataModel from './DataModel';

const rootElement = document.getElementById('root');

function restartApp(flights=null) {

    const dataModel = new DataModel(/*debounce(newStateCallback,200)*/newStateCallback);
    dataModel.search = observable(uriToState(window.document.location));

    if(flights){
        dataModel.flights = observable(flights);
    }

    if (dataModel.search.from.id !== '' && dataModel.search.to.id !== '') {
        dataModel.searchFlights(false);
    }


    function newStateCallback() {
        const uri = stateToUri(dataModel.flights.search);
        //console.log(uri);
        window.history.pushState({}, window.document.title, uri);
    }

    //observe(dataModel.flights, debounce(observer,200));

    window.onpopstate = ()=>restartApp(dataModel.flights);

    //rootElement.innerHTML = '';
    ReactDOM.render(<App dataModel={dataModel}/>, rootElement);
}

restartApp();