import React, { Component } from 'react';
import { searchFlights } from '../../apiAdapter';
import InputLocation from '../InputLocation';
import './index.css';


export default function Form({dataModel}){
    return (


        <div>
            {/*<input type="text" id="from" defaultValue={dataModel.search.from} onChange={(event)=>{dataModel.search.from=event.target.value}} />
            <input type="text" id="to" defaultValue={dataModel.search.to} onChange={(event)=>{dataModel.search.to=event.target.value}}/>*/}


            <InputLocation onChange={(locationId)=>{dataModel.search.from=locationId}} />
            <InputLocation onChange={(locationId)=>{dataModel.search.to=locationId}} />



            <input type="date" id="date" defaultValue={dataModel.search.date} onChange={(event)=>{dataModel.search.date=event.target.value}}/>




            <button onClick={async ()=>{
                dataModel.loading = true;
                const results = await searchFlights(dataModel.search);
                dataModel.results = results;
                dataModel.loading = false;


            }}>Search</button>

        </div>


    );
}