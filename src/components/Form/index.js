import React from 'react';
import moment from 'moment';
import InputLocation from '../InputLocation';
import './index.css';


export default function({dataModel}){
    return (


        <div className={'form'}>

            <label>
                <span>From:</span>
                <InputLocation defaultValue={dataModel.search.from} onChange={(locationId)=>{dataModel.search.from=locationId}} />
            </label>
            <label>
                <span>To:</span>
                <InputLocation defaultValue={dataModel.search.to} onChange={(locationId)=>{dataModel.search.to=locationId}} />
            </label>
            <label>
                <span>Date:</span>
                <input type="date" defaultValue={moment(dataModel.search.date).format('YYYY-MM-DD')} onChange={(event)=>dataModel.search.date=new Date(event.target.value)} />
            </label>

            <button onClick={()=>{dataModel.search.pagination.page=0;dataModel.searchFlights()}}>Search</button>

        </div>


    );
}