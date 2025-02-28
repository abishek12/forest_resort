import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const BoucherWidget = () => {
    return (
        <>
            <div className="single-widget widget-brochure">
                <h4 className="widget-title">Brochure</h4>
                <ul>
                    <li><Link to="#"><i className="fa-solid fa-file-pdf"></i> Download Brochure </Link></li>
                    {/* <li><Link to="#"><i className="fa-solid fa-file-pdf"></i> Company Details </Link></li> */}
                </ul>
            </div>
        </>
    );
};

export default BoucherWidget;