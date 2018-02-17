import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {observable} from 'mobx';



const dataModel = observable({


    search: {
        from: 'prague_cz',
        to: 'london_gb',
        date: new Date(),
    },


    loading: false,



    flights: {
        pagination: {
            page:0,
            pageLimit:10,
            onPage:5,
            sort:{
                by: 'price',
                asc: true
            }
        },
        data:[]
    }


});




ReactDOM.render(<App dataModel={dataModel} />, document.getElementById('root'));
