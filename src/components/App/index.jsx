import React, {Component} from 'react';
import Form from '../Form';
import Table from '../Flights';
import FlightsPagination from '../FlightsPagination';
import {observer} from 'mobx-react';
import './index.css';


export default observer(function ({dataModel}) {
    return (
        <div>
            <h1>Kiwi search</h1>


            {
                dataModel.flights.loading ? (
                    <div>
                        nice rolling loader
                    </div>
                ) : undefined
            }


            {/*<pre style={{height: 200,overflow:'scroll'}}>
                {JSON.stringify(dataModel,null,4)}
            </pre>*/}


            <Form dataModel={dataModel}/>

            {dataModel.flights.searched ?
                <div>
                    {dataModel.flights.total === 0 ? (
                        <div>
                            No results
                        </div>
                    ) : (
                        <div>
                            {`Total results: ${dataModel.flights.total}`}

                            <FlightsPagination dataModel={dataModel}/>
                            <Table dataModel={dataModel}/>
                            <FlightsPagination dataModel={dataModel}/>
                        </div>
                    )}
                </div>
                : undefined}


        </div>
    );
})