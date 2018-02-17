import React, { Component } from 'react';
import moment from 'moment';//.format('YYYY-MM-DD hh:mm')
import {observer} from 'mobx-react';
import './index.css';


export default observer(function({dataModel}){
    return (
        <div>

            <table>

                <thead>
                <tr>
                    <th>#</th>
                    <th>From</th>
                    <th>To</th>
                    {[
                        {
                            id: 'date',
                            label: 'Departure'
                        },
                        {
                            id: 'price',
                            label: 'Price'
                        }

                    ].map((column)=>(

                        <th key={column.id} className={`sortable ${dataModel.search.pagination.sort.by===column.id?'sorted':''}`} onClick={()=>{

                            if(dataModel.search.pagination.sort.by!==column.id){
                                dataModel.search.pagination.sort.asc=true;
                                dataModel.search.pagination.sort.by=column.id;
                            }else{
                                dataModel.search.pagination.sort.asc=!dataModel.search.pagination.sort.asc;
                            }
                            dataModel.search.pagination.page=0;
                            dataModel.searchFlights();

                        }}>
                            {column.label}{dataModel.search.pagination.sort.by===column.id?(dataModel.search.pagination.sort.asc?'▼':'▲'):undefined}
                        </th>

                    ))}
                    <th>Actions</th>
                </tr>

                </thead>
                <tbody className={dataModel.flights.loading?'loading':''}>


                {dataModel.flights.data.map((flight,iterator)=>(
                    <tr key={iterator}>
                        <td>{iterator+dataModel.search.pagination.itemsPerPage*dataModel.search.pagination.page+1}</td>
                        <td>{flight.cityFrom}</td>
                        <td>{flight.cityTo}</td>
                        <td>{moment(flight.departureTime).format('LLL')}</td>
                        <td>{flight.price} &euro;</td>
                        <td><a href={flight.url} target="_blank">Buy</a></td>
                    </tr>
                ))}


                </tbody>

            </table>


        </div>
    );
})