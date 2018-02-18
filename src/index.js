import React from 'react';
import {observe, observable} from 'mobx';
import ReactDOM from 'react-dom';
import {uriToState, stateToUri} from './routing';
import App from './components/App';
import DataModel from './DataModel';

const rootElement = document.getElementById('root');

function restartApp(/*event=null*/) {

    const dataModel = new DataModel();
    dataModel.search = observable(uriToState(window.document.location));
    /*if(event){
        console.log(event.state);
        dataModel.flights = observable(event.state);
    }*/

    if (dataModel.search.from.id !== '' && dataModel.search.to.id !== '') {
        dataModel.searchFlights();
    }


    function observer() {
        window.history.pushState(/*dataModel.flights*/{}, window.document.title, stateToUri(dataModel.search));
    }

    observe(dataModel.search, observer);
    observe(dataModel.search.pagination, observer);
    observe(dataModel.search.pagination.sort, observer);

    window.onpopstate = restartApp;

    //rootElement.innerHTML = '';
    ReactDOM.render(<App dataModel={dataModel}/>, rootElement);
}

restartApp();