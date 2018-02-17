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



            <input type="date" defaultValue={moment(dataModel.search.dateFrom).format('YYYY-MM-DD')} onChange={(event)=>dataModel.search.dateFrom=new Date(event.target.value)} />

            <input type="date" defaultValue={moment(dataModel.search.dateTo).format('YYYY-MM-DD')} onChange={(event)=>dataModel.search.dateTo=new Date(event.target.value)} />




            <button onClick={()=>{dataModel.search.pagination.page=0;dataModel.searchFlights()}}>Search</button>

        </div>


    );
}