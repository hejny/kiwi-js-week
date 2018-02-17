import React, { Component } from 'react';
import Form from '../Form';
import Table from '../Flights';
import {observer} from 'mobx-react';
import './index.css';


export default observer(function({dataModel}){
    return (
        <div>
            <h1>Kiwi search</h1>


            {
                dataModel.loading?(
                    <div>
                        nice rolling loader
                    </div>
                ):undefined
            }


            <pre style={{height: 200,overflow:'scroll'}}>
                {JSON.stringify(dataModel,null,4)}
            </pre>


            <Form dataModel={dataModel}/>



            <div>
                <Table dataModel={dataModel}/>
            </div>








        </div>
    );
})