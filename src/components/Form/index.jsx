import React, { Component } from 'react';
import moment from 'moment';
import InputLocation from '../InputLocation';
import './index.css';


export default function({dataModel}){
    return (


        <div>
            {/*<input type="text" id="from" defaultValue={dataModel.search.from} onChange={(event)=>{dataModel.search.from=event.target.value}} />
            <input type="text" id="to" defaultValue={dataModel.search.to} onChange={(event)=>{dataModel.search.to=event.target.value}}/>*/}


            <InputLocation onChange={(locationId)=>{dataModel.search.from=locationId}} />
            <InputLocation onChange={(locationId)=>{dataModel.search.to=locationId}} />



            <input type="date" id="date" defaultValue={moment(dataModel.search.date).format('YYYY-MM-DD')} onChange={(event)=>dataModel.search.date=new Date(event.target.value)} />




            <button onClick={()=>dataModel.searchFlights()}>Search</button>

        </div>


    );
}