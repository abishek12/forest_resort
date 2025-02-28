import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ReactWOW from 'react-wow';

const SingleChooseV4 = ({ choose }) => {
    const { listTitle, listText, listLink, listIcon, listAnimation, animationDelay } = choose

    return (
        <>
            <ReactWOW animation={listAnimation} delay={animationDelay}>
                <li>
                    <div className="info">
                        <Link to={`/${listLink}#`}>{listTitle}</Link>
                        <p>{listText}</p>
                    </div>
                    <div className="link">
                        <Link to={`/${listLink}#`}><i className={listIcon}></i></Link>
                    </div>
                </li>
            </ReactWOW>
        </>
    );
};

export default SingleChooseV4;