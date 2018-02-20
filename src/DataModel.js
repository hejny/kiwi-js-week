import {observable, computed} from 'mobx';
import {searchFlights} from './apiAdapter';


export default class {

    constructor(newStateCallback) {
        this.newStateCallback = newStateCallback;
    }

    @observable flights = {
        searched: false,
        loading: false,
        total: 0,
        data: []
    };

    @computed get totalPages() {
        return Math.ceil(this.flights.total / this.search.pagination.itemsPerPage) - 1;
    }


    async searchFlights(callNewStateCallback = true) {
        this.flights.loading = true;
        const search = JSON.parse(JSON.stringify(this.search));//todo better
        const flights = await searchFlights(this.search);
        this.flights.search = search;
        this.flights.total = flights.total;
        this.flights.data = flights.data;
        this.flights.loading = false;
        this.flights.searched = true;

        if (callNewStateCallback) {
            this.newStateCallback();
        }
    }
}