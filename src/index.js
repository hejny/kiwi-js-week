import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {observable,computed} from 'mobx';



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



/*class DataModel {
    @observable price = 0;
    @observable amount = 1;

    @computed get total() {
        return this.price * this.amount;
    }
}*/




ReactDOM.render(<App dataModel={dataModel} />, document.getElementById('root'));
