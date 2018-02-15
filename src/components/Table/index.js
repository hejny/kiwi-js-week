import React, { Component } from 'react';
import {observer} from 'mobx-react';
import './index.css';


export default observer(function Table({dataModel}){
    return (
        <div>

            <table>

                <thead>
                <tr>
                    <th>from</th>
                    <th>to</th>
                    <th>date</th>
                    <th>time</th>
                    <th>price [EUR]</th>
                </tr>

                </thead>
                <tbody>


                {dataModel.results.map((result)=>(
                    <tr>
                        <td>{result.from}</td>
                        <td>{result.to}</td>
                        <td>{result.date}</td>
                        <td>{result.time}</td>
                        <td>{result.price}</td>
                    </tr>
                ))}


                </tbody>

            </table>




        </div>
    );
})