import React, { Component } from 'react';
import {observer} from 'mobx-react';
import './index.css';


export default observer(function({dataModel}){
    return (
        <div>


            page: {dataModel.search.pagination.page} / {dataModel.totalPages}

            {/*<p>{ dataModel.flights.length===0?`No results`:`Total results: ${dataModel.flights.length}`}</p>*/}

            <button onClick={()=>{dataModel.search.pagination.page++;dataModel.searchFlights()}}>Next</button>

        </div>
    );
})