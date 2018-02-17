import React, { Component } from 'react';
import Form from '../Form';
import Table from '../Flights';
import FlightsPagination from '../FlightsPagination';
import {observer} from 'mobx-react';
import './index.css';


export default observer(function({dataModel}){
    return (
        <div>
            <h1>Kiwi search</h1>


            {
                dataModel.flights.loading?(
                    <div>
                        nice rolling loader
                    </div>
                ):undefined
            }


            {/*<pre style={{height: 200,overflow:'scroll'}}>
                {JSON.stringify(dataModel,null,4)}
            </pre>*/}


            <Form dataModel={dataModel}/>



            <div>

                <p>{ dataModel.flights.total===0?`No results`:`Total results: ${dataModel.flights.total}`}</p>

                <FlightsPagination dataModel={dataModel}/>
                <Table dataModel={dataModel}/>
                <FlightsPagination dataModel={dataModel}/>
            </div>








        </div>
    );
})