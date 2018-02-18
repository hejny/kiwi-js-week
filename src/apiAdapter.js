import superagent from "superagent";
import moment from 'moment';
import {API_URL, BOOKING_URL, BOOKING_AFFILID} from "./config";

export async function searchFlights(search) {

    const response = await superagent
        .get(`${API_URL}/flights`)
        .query({
            flyFrom: search.from.id,
            to: search.to.id,
            dateFrom: moment(search.date).format('DD/MM/YYYY'),
            dateTo: moment(search.date).format('DD/MM/YYYY'),
            offset: search.pagination.page * search.pagination.itemsPerPage,
            limit: search.pagination.itemsPerPage,
            sort: search.pagination.sort.by,
            asc: search.pagination.sort.asc ? '1' : '0',

        });

    return ({
        total: response.body._results,
        data: response.body.data.map((flight) => {

            const departureTime = new Date(flight.dTimeUTC * 1000);

            return ({
                url: `${BOOKING_URL}?currency=EUR&affilid=${encodeURI(BOOKING_AFFILID)}&booking_token=${encodeURI(flight.booking_token)}`,
                cityFrom: flight.cityFrom,
                cityTo: flight.cityTo,
                departureTime,
                price: flight.price,

            });

        })
    });
}

export async function searchLocations(term) {

    const response = await superagent
        .get(`${API_URL}/locations/?v=2&locale=en-US`)
        .query({term});

    return response.body.locations;
}