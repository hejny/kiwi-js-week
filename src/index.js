import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {observable} from 'mobx';



const dataModel = observable({


    search: {
        from: 'prague_cz',
        to: 'london_gb',
        date: '08/08/2018',
    },


    loading: false,
    results: []


});




ReactDOM.render(<App dataModel={dataModel} />, document.getElementById('root'));
