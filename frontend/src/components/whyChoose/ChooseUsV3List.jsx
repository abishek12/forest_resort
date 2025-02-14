import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const ChooseUsV3List = ({ list }) => {
    const { listLink, listName, listIcon } = list

    return (
        <>
            <li>
                <h4><Link to={`/${listLink}#`}>{listName} <i className={listIcon}></i></Link></h4>
            </li>
        </>
    );
};

export default ChooseUsV3List;