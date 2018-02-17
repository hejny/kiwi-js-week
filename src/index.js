import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import DataModel from './DataModel';

const dataModel = new DataModel();
ReactDOM.render(<App dataModel={dataModel} />, document.getElementById('root'));