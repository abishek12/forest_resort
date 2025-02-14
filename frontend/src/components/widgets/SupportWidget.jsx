import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SupportWidget = () => {
    return (
        <>
            <div className="single-widget quick-contact-widget text-light" style={{ backgroundImage: "url(/img/blog/blog3.png)" }}>
                <div className="content">
                    <h3>Need Help?</h3>
                    <p>
                        Customer Service
                    </p>
                    <h4>9804185602</h4>
                    <h4>9856085602</h4>
                    <h4>9814176490</h4>
                    <h4>061-581637</h4>
                    <h4><a href="mailto:forestsports21@gmail.com">forestsports21@gmail.com</a></h4>
                    <Link className="btn mt-30 circle btn-sm btn-gradient" to="/contact-us#">Contact Us</Link>
                </div>
            </div>
        </>
    );
};

export default SupportWidget;