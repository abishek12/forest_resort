import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SocialShare2 = () => {
    return (
        <>
            <li><Link to="http://www.facebook.com/forestsportsarena" target='_blank' ><i className="fab fa-facebook-f"></i></Link></li>
            <li><Link to="https://www.instagram.com/forest_sports_arena/" target='_blank' ><i className="fab fa-instagram"></i></Link></li>
            <li><Link to="https://www.linkedin.com/company/forest-resort-recreation-center/" target='_blank' ><i className="fab fa-linkedin-in"></i></Link></li>
        </>
    );
};

export default SocialShare2;