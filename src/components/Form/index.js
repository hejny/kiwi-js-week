import React, { Component } from 'react';
import './index.css';


export default function Form({results}){
    return (


        <div>
            <input type="text" id="from"/>

            <input type="text" id="to"/>
            <input type="date" id="date"/>
            <button onClick={()=>{alert(1);}}>Search</button>

        </div>


    );
}