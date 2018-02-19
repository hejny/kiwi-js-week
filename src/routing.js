import URI from "urijs";
import moment from "moment";

export function stateToUri(state) {
    return URI(window.location.toString())//todo better
        .query({
            from: state.from.id,
            to: state.to.id,
            date: moment(state.date).format('YYYY-MM-DD'),
            page: state.pagination.page,
            sortBy: state.pagination.sort.by,
            sortAsc: state.pagination.sort.asc,
        })
        .toString();
}

export function uriToState(uri) {
    const query = URI(uri).search(true);
    return ({
        from: {
            name: query.from || 'Prague',
            id: query.from || 'prague_cz',
        },
        to: {
            name: query.to || 'Barcelona',
            id: query.to || 'barcelona_es',
        },
        date: moment(query.date || '2018-03-16').toDate(),
        pagination: {
            page: parseInt(query.page || '0'),
            itemsPerPage: 5,
            sort: {
                by: query.sortBy || 'date',
                asc: query.sortAsc || true == 'true'
            }
        }
    });
}
