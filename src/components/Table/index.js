import React, { Component } from 'react';
import './index.css';


export default function Table({results}){
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


                {results.map((result)=>(
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
}