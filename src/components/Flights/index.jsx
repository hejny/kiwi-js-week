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
                    <th>from</th>
                    <th>to</th>
                    <th>date and time</th>
                    <th>price [EUR]</th>
                </tr>

                </thead>
                <tbody>


                {dataModel.flights.data.map((flight)=>(
                    <tr>
                        <td>{flight.cityFrom}</td>
                        <td>{flight.cityTo}</td>
                        <td>{moment(flight.departureTime).format('LLL')}</td>
                        <td>{flight.price} &euro;</td>
                    </tr>
                ))}


                </tbody>

            </table>


            page: {dataModel.flights.pagination.page} / {dataModel.flights.pagination.pageLimit}

            <button onClick={()=>{}}>Next</button>




        </div>
    );
})