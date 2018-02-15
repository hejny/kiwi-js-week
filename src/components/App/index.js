import React, { Component } from 'react';
import Form from '../Form';
import Table from '../Table';
import {observer} from 'mobx-react';
import './index.css';


export default observer(function App({dataModel}){
    return (
        <div>
            <h1>Kiwi search</h1>



            <Form dataModel={dataModel}/>


            {
                dataModel.loading?(
                    <div>
                        nice rolling loader
                    </div>
                ):(
                    <div>
                        <Table dataModel={dataModel}/>
                        <p>{ dataModel.results.length===0?`No results`:`Total results: ${dataModel.results.length}`}</p>
                    </div>
                )



            }




        </div>
    );
})