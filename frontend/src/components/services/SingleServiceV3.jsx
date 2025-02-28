import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleServiceV3 = ({ service }) => {
    const { id, thumb, serviceIcon, serviceTitle, serviceText, btnText, btnLink, btnIcon } = service

    return (
        <>
            <div className="services-style-three" style={{ backgroundImage: `url(/img/shape/${thumb})` }}>
                <i className={serviceIcon}></i>
                <h4><Link to={`/${btnLink}/${id}#`}>{serviceTitle}</Link></h4>
                <p>{serviceText}</p>
                <Link to={`/${btnLink}/${id}#`} className="btn-service">{btnText}<i className={btnIcon}></i></Link>
            </div>
        </>
    );
};

export default SingleServiceV3;