import React, { Component } from 'react';
import Form from '../Form';
import Table from '../Table';
import './index.css';


export default function App({results}){
    return (
        <div>
            <h1>Kiwi search</h1>
            <Form/>
            <Table results={results}/>
        </div>
    );
}