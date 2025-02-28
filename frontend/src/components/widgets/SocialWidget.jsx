import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const SocialWidget = () => {
    return (
        <>
            <div className="sidebar-item social-sidebar">
                <h4 className="title">follow us</h4>
                <div className="sidebar-info">
                    <ul>
                        <li className='facebook'>
                            <Link to="https://www.facebook.com/forestsportsarena" target='_blank'><i className="fab fa-facebook-f"></i></Link>
                        </li>
                        <li className='instagram'>
                            <Link to="https://www.instagram.com/forest_sports_arena/" target='_blank'><i className="fab fa-instagram"></i></Link>
                        </li>
                        <li className='linkedin'>
                            <Link to="https://www.linkedin.com/company/forest-resort-recreation-center/" target='_blank'><i className="fab fa-linkedin-in"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SocialWidget;