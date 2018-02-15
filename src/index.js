import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


const result = {
    from: 'Prague',
    to: 'Barcelona',
    date: '2018/03/18',
    time: '18:30',
    price: '150€',

};
const results = [result,result,result,result,result,result];


ReactDOM.render(<App results={results} />, document.getElementById('root'));
