import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {observable} from 'mobx';


const result = {
    from: 'Prague',
    to: 'Barcelona',
    date: '2018/03/18',
    time: '18:30',
    price: '150€',
};




const dataModel = observable({


    loading: false,
    results: []


});




ReactDOM.render(<App dataModel={dataModel} />, document.getElementById('root'));
