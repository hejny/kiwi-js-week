import React from 'react';
import { intercept,observe, observable,spy,autorunAsync} from 'mobx';
import ReactDOM from 'react-dom';
import URI from 'urijs';
import moment from 'moment';
import App from './components/App';
import DataModel from './DataModel';

const dataModel = new DataModel();
pushUriToState();


function pushUriToState(state) {
    dataModel.search = observable(uriToState(window.document.location));

    if (dataModel.search.from.id !== '' && dataModel.search.to.id !== '') {
        dataModel.searchFlights();
    }


    observe(dataModel.search, observer );
    observe(dataModel.search.pagination, observer );
    observe(dataModel.search.pagination.sort, observer );




    window.onpopstate = pushUriToState;


    ReactDOM.render(<App dataModel={dataModel}/>, document.getElementById('root'));
}



function stateToUri(state){
    return URI('/')
        .query({
            from: state.from.id,
            to: state.to.id,
            date: moment(state.date).format('YYYY-MM-DD'),
            page: state.pagination.page,
            sortBy: state.pagination.sort.by,
            sortAsc: state.pagination.sort.asc,
        })
        .toString();
}
function uriToState(uri){
    const query = URI(uri).search(true);
    console.log(query);
    return({
        from: {
            name: query.from||'Prague',
            id: query.from||'prague_cz',
        },
        to: {
            name: query.to||'Barcelona',
            id: query.to||'barcelona_es',
        },
        date: moment(query.date||'2018-03-16').toDate(),
        pagination: {
            page: parseInt(query.page||'0'),
            itemsPerPage: 5,
            sort: {
                by: query.sortBy||'date',
                asc: query.sortAsc||true=='true'
            }
        }
    });
}





function observer(){
    window.history.pushState({}, window.document.title, stateToUri(dataModel.search));
}

