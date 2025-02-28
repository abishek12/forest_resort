import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Pagination = ({ blogsPerPage, totalBlogs, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="row">
            <div className="col-md-12 pagi-area text-center">
                <nav aria-label="navigation">
                    <ul className="pagination">
                        {pageNumbers.map(number => (
                            <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                                <Link onClick={() => paginate(number)} className="page-link" to="#!">
                                    {number}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Pagination;
