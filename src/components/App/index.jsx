import React, { Component } from 'react';
import Form from '../Form';
import Table from '../Flights';
import {observer} from 'mobx-react';
import './index.css';


export default observer(function({dataModel}){
    return (
        <div>
            <h1>Kiwi search</h1>


            <pre style={{height: 200,overflow:'scroll'}}>
                {JSON.stringify(dataModel,null,4)}
            </pre>


            <Form dataModel={dataModel}/>


            {
                dataModel.loading?(
                    <div>
                        nice rolling loader
                    </div>
                ):(
                    <div>
                        <Table dataModel={dataModel}/>
                        <p>{ dataModel.flights.length===0?`No results`:`Total results: ${dataModel.flights.length}`}</p>
                    </div>
                )



            }




        </div>
    );
})