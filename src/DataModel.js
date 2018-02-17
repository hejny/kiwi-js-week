import {observable} from 'mobx';
import { searchFlights } from './apiAdapter';




export default class{


    @observable search = {
        from: 'prague_cz',
        to: 'london_gb',
        date: new Date(),
    };

    @observable loading = false;
    @observable flights = {
        pagination: {
            page:0,//todo better names
            pageLimit:10,
            onPage:5,
            sort:{
                by: 'price',
                asc: true
            }
        },
        data:[]
    };


    async searchFlights(){
        this.loading = true;
        const flights = await searchFlights(this.search,this.flights.pagination);
        this.flights.pagination.offset = 0;
        this.flights.pagination.pageLimit = flights.pageLimit;
        this.flights.data= flights.data;
        this.loading = false;
    }



}