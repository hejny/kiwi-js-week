import React from 'react';
import Form from '../Form/index';
import Table from '../Flights';
import Loader from '../Loader';
import FlightsPagination from '../FlightsPagination';
import {observer} from 'mobx-react';
import './index.css';


export default observer(function ({dataModel}) {
    return (
        <div className={'app'}>
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

            <Form dataModel={dataModel}/>

            {dataModel.flights.searched ?
                <div className={'results'}>
                    {dataModel.flights.total === 0 ? (
                        <div className={'total'}>
                            No results
                        </div>
                    ) : (
                        <div>
                            <div className={'total'}>
                                {`Total results: ${dataModel.flights.total}`}
                            </div>

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