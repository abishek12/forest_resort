import React from 'react';

const SingleShowCaseV1 = ({ service }) => {
    const { listTitle, listText } = service

    return (
        <>
            <li>
                <h5>{listTitle}</h5>
                <p>{listText}</p>
            </li>
        </>
    );
};

export default SingleShowCaseV1;