import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SinglePopularService = ({ popular }) => {
    const { id, icon, serviceName, serviceLink, serviceText } = popular

    return (
        <>
            <div className="col-md-6">
                <div className="item">
                    <i className={icon}></i>
                    <h4><Link to={`/${serviceLink}/${id}#`}>{serviceName}</Link></h4>
                    <p>{serviceText}</p>
                </div>
            </div>
        </>
    );
};

export default SinglePopularService;