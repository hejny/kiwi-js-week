import React from 'react';
import Form from '../Form/index';
import Table from '../Flights';
import Loader from '../Loader';
import FlightsPagination from '../FlightsPagination';
import {observer} from 'mobx-react';
import './index.css';


export default observer(function ({dataModel}) {
    return (
        <div>
            <nav className={'top'}>
                <h1>Kiwi search</h1>
            </nav>


            <nav className={'loading'}>
                {
                    dataModel.flights.loading ? (
                        <Loader/>
                    ) : undefined
                }
            </nav>

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