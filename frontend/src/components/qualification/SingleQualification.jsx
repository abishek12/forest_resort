import React from 'react';

const SingleQualification = ({ qualification }) => {
    const { name, icon } = qualification
    return (
        <>
            <div className="qualification-item">
                <i className={icon}></i>
                <h4>{name}</h4>
            </div>
        </>
    );
};

export default SingleQualification;