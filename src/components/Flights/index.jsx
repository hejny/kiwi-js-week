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
                    <th>to</th>
                    <th>to</th>
                    <th>date and time</th>
                    <th>price [EUR]</th>
                    <th>actions</th>
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