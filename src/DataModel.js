import {observable, computed} from 'mobx';
import moment from 'moment';
import {searchFlights} from './apiAdapter';


export default class {


    @observable search = {
        from: 'prague_cz',
        to: 'barcelona_es',
        date: moment('2018/03/16').toDate(),

        pagination: {
            page: 0,
            itemsPerPage: 5,
            sort: {
                by: 'date',
                asc: true
            }
        },


    };

    @observable flights = {
        searched: false,
        loading: false,
        total: 0,
        data: []
    };

    @computed get totalPages() {
        return Math.ceil(this.flights.total / this.search.pagination.itemsPerPage) - 1;
    }


    async searchFlights() {
        this.flights.searched = true;
        this.flights.loading = true;
        const flights = await searchFlights(this.search);
        this.flights.search = JSON.parse(JSON.stringify(this.search));//todo better
        this.flights.total = flights.total;
        this.flights.data = flights.data;
        this.flights.loading = false;
    }
}