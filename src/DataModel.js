import {observable,computed} from 'mobx';
import { searchFlights } from './apiAdapter';




export default class{


    @observable search = {
        from: 'prague_cz',
        to: 'london_gb',
        dateFrom: new Date(),
        dateTo: new Date(),

        pagination: {
            page:0,
            itemsPerPage:5,
            sort:{
                by: 'price',
                asc: true
            }
        },



    };

    @observable flights = {
        searched: false,
        loading: false,
        total: 0,
        data:[]
    };

    @computed get totalPages() {
        return Math.ceil(this.flights.total/this.search.pagination.itemsPerPage)
    }



    async searchFlights(){
        this.flights.searched = true;
        this.flights.loading = true;
        const flights = await searchFlights(this.search);
        this.flights.total = flights.total;
        this.flights.data= flights.data;
        this.flights.loading = false;
    }



}