import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SinglePriceV1 = ({ price }) => {
    const { cardClass, itemClass, planName, planPrice, planType, planText, btnLink, btnText, btnClass, checkList1, checkList2, checkList3, checkList4, checkListIcon } = price

    return (
        <>
            <div className={`pricing-style-one ${cardClass ? cardClass : ""} col-md-6`}>
                <div className={`item ${itemClass ? itemClass : ""}`}>
                    <div className="pricing-header">
                        <i className="flaticon-cleaning-6"></i>
                        <h4>{planName}</h4>
                        <h2><sup>Rs.</sup>{planPrice} <sub>/{planType}</sub></h2>
                        <p>{planText}</p>
                        <div className="button">
                            <Link className={`btn btn-border ${btnClass ? btnClass : "btnClass"} btn-sm`} to={`/${btnLink}#`}>{btnText}</Link>
                        </div>
                    </div>
                    <div className="pricing-info">
                        <ul>
                            <li><i className={checkListIcon}></i> {checkList1}</li>
                            <li><i className={checkListIcon}></i> {checkList2}</li>
                            <li><i className={checkListIcon}></i> {checkList3}</li>
                            <li><i className={checkListIcon}></i> {checkList4}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePriceV1;