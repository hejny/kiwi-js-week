import React, { Component } from 'react';
import searchFlights from '../../searchFlights';
import './index.css';


export default function Form({dataModel}){
    return (


        <div>
            <input type="text" id="from"/>

            <input type="text" id="to"/>
            <input type="date" id="date"/>
            <button onClick={async ()=>{




                dataModel.loading = true;
                const results = await searchFlights({});
                dataModel.results = results;
                dataModel.loading = false;


            }}>Search</button>

        </div>


    );
}