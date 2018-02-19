import React from 'react';
import {observer} from 'mobx-react';
import {PAGINATION_BOUNDS} from '../../config';
import './index.css';


export default observer(function ({dataModel}) {

    const pageList = [];

    let from = Math.max(dataModel.search.pagination.page - PAGINATION_BOUNDS, 0);
    const to = Math.min(from + 2 * PAGINATION_BOUNDS, dataModel.totalPages);
    from = Math.max(to - 2 * PAGINATION_BOUNDS, 0);


    for (let page = from; page <= to; page++) {
        pageList.push(page);
    }

    return (
        <div>

            <ul className={'pagination'}>


                <li
                    className={dataModel.search.pagination.page <= 0 ? 'disabled' : ''}
                    onClick={() => {
                        if (dataModel.search.pagination.page > 0) {
                            dataModel.search.pagination.page--;
                            dataModel.searchFlights();
                        }
                    }}
                >
                    Previous
                </li>


                {pageList.map((page) => (
                    <li
                        key={page}
                        className={`page ${dataModel.search.pagination.page === page ? 'current' : ''}`}
                        onClick={() => {
                            dataModel.search.pagination.page = page;
                            dataModel.searchFlights();
                        }}
                    >
                        {page + 1}
                    </li>


                ))}


                <li
                    className={dataModel.search.pagination.page >= dataModel.totalPages ? 'disabled' : ''}
                    onClick={() => {
                        if (dataModel.search.pagination.page < dataModel.totalPages) {
                            dataModel.search.pagination.page++;
                            dataModel.searchFlights();
                        }
                    }}
                >
                    Next
                </li>

            </ul>

        </div>
    );
})