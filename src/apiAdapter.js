import superagent from "superagent";
import {API_URL} from "./config";

export async function searchFlights(search, pagination) {

    const response = await superagent
        .get(`${API_URL}/flights`)
        .query({
            flyFrom: search.from,
            to: search.to,
            dateFrom: search.date,
            dateTo: search.date,
            offset: pagination.onPage * pagination.page,
            limit: pagination.onPage,
            sort: pagination.sort.by,
            asc: pagination.sort.asc ? '1' : '0',

        });

    console.log(response);


    return ({
        pageLimit: Math.ceil(response.body._results / pagination.onPage),
        data: response.body.data.map((flight) => {

            const departureTime = new Date(flight.dTimeUTC*1000);

            return ({
                url: `https://www.kiwi.com/en/booking?currency=EUR&booking_token=${encodeURI(flight.booking_token)}`,
                cityFrom: flight.cityFrom,
                cityTo: flight.cityTo,
                departureTime,
                price: flight.price,

            });

        })
    });
}

/*/
{
    "mapIdfrom": "madrid",
    "duration": {
        "total": 9000,
        "return": 0,
        "departure": 9000
    },
    "flyTo": "STN",
    "conversion": {
        "EUR": 39
    },
    "mapIdto": "london",
    "nightsInDest": null,
    "airlines": [
        "FR"
    ],
    "id": "355612602",
    "facilitated_booking_available": true,
    "pnr_count": 1,
    "fly_duration": "2h 30m",
    "countryTo": {
        "code": "GB",
        "name": "United Kingdom"
    },
    "baglimit": {
        "hand_width": 40,
        "hand_length": 55,
        "hold_weight": 20,
        "hand_height": 20,
        "hand_weight": 10
    },
    "aTimeUTC": 1537425900,
    "p3": 1,
    "price": 39,
    "bags_price": {
        "1": 25,
        "2": 55
    },
    "cityTo": "London",
    "transfers": [],
    "flyFrom": "MAD",
    "dTimeUTC": 1537416900,
    "p2": 1,
    "countryFrom": {
        "code": "ES",
        "name": "Spain"
    },
    "p1": 1,
    "dTime": 1537424100,
    "found_on": [
        "deprecated"
    ],
    "booking_token": "b/n57BoTjASi2ByXlxiZP3oDvlzrQBO2CyfmSlMWf7/OmPo6FIIzv7058EZZBqXTUlVTX0wZaKJTNjMv0b73bKHUBPeTPvxSenAi8kgm1xNwpiNkLusxWDcaRjJo+SGuY4lAodk6SEosRgUVBw2U432ddyloZrS4XBv5Mf3r8cG+LULFQkKahKR3bOO7T/DSV6GaS8JwKdcYP/PRv+iSQERebJOA8xB4EXdJ6okdWLlfzmM/qtx/aUIrPUsrRlUkCBM3vlrbSR1TgRcqopL0EBQ5d5VzOQHG2KzGR17G22Lhd3x+4gBvwRHOM+sfHBzD9YFjNBvK8+/JVcgGjK/h/dTh0MO+mz4wzkC1eZFkkGoPMf6NrveH8EoOjq5DkajskBETJ26+XpvxhszBq8hi9aea8M2ZxjUf5jIlErJOWw6YANBbPnI/DqNc1PQLfFOzRc9/B/iHPinlgLA3wQnrqSdynFIFRgak4JMx7Qhi7ltIg5dybv9Dv4XxOh40Wendp/eiCeFgyl/sugTtaxX3cQXzb+krdcPyhUoAV8Gr6qMGsl6t/lMgmP5rs+UH17OQuJrxokmqe2Cayapy1fQftks2Q6mLQwJuNsg6T7FyFjUJk/t1RAphKjp232lEtbp4Vwy4OUS5Wb8wkXAZclCvC7u75cIsLMWoGXORpNG+bDw=",
    "routes": [
        [
            "MAD",
            "STN"
        ]
    ],
    "cityFrom": "Madrid",
    "aTime": 1537429500,
    "route": [
        {
            "bags_recheck_required": false,
            "mapIdfrom": "madrid",
            "flight_no": 5993,
            "original_return": 0,
            "lngFrom": -3.566667,
            "flyTo": "STN",
            "guarantee": false,
            "latTo": 51.885,
            "source": "deprecated",
            "combination_id": "355612602",
            "id": "355612602",
            "latFrom": 40.493611,
            "lngTo": 0.235,
            "dTimeUTC": 1537416900,
            "aTimeUTC": 1537425900,
            "return": 0,
            "price": 1,
            "cityTo": "London",
            "vehicle_type": "aircraft",
            "flyFrom": "MAD",
            "mapIdto": "london",
            "dTime": 1537424100,
            "found_on": "deprecated",
            "airline": "FR",
            "cityFrom": "Madrid",
            "aTime": 1537429500
        }
    ],
    "distance": 1300.99
}
/**/


export async function searchLocations(term) {

    const response = await superagent
        .get(`${API_URL}/locations/?v=2&locale=en-US`)
        .query({term});

    return response.body.locations;
}


