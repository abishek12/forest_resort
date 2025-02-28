import React from 'react';
import HeaderLogoV1 from './HeaderLogoV1';
import MainMenu from './MainMenu';
import { useState } from 'react';
import { useEffect } from 'react';

const HeaderV5 = () => {

    // Sticky Menu 
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Mobile Menu 
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(true);
        document.body.classList.add('no-fade');
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.classList.remove('no-fade');
    };

    // Mobile DropDown 
    const toggleSubMenu = (e) => {
        e.preventDefault();
        const listItem = e.target.parentElement;
        const subMenu = listItem.querySelector('ul.dropdown-menu');
        if (subMenu) {
            listItem.classList.toggle('on');
            subMenu.style.maxHeight = subMenu.style.maxHeight === "20000px" ? "0" : "20000px";
        }
    };

    const toggleMegaMenu = (e) => {
        e.preventDefault();
        const listItem = e.target.parentElement;
        const megaMenu = listItem.querySelector('.content');
        if (megaMenu) {
            megaMenu.classList.toggle('d-block');
            listItem.classList.toggle('on');
        }
    };

    return (
        <>
            <header>
                <nav className={`navbar navbar-common mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed dark no-background ${isSticky ? "sticked" : ""}`}>
                    <div className="container d-flex justify-content-between align-items-center">
                        <HeaderLogoV1 openMenu={openMenu} />
                        <MainMenu isOpen={isOpen} closeMenu={closeMenu} toggleSubMenu={toggleSubMenu} toggleMegaMenu={toggleMegaMenu} />
                        {/* <div className="attr-right">
                            <div className="attr-nav flex">
                                <ul>
                                    <li className="contact">
                                        <div className="call">
                                            <div className="icon">
                                                <i className="fa-solid fa-comments-dollar"></i>
                                            </div>
                                            <div className="info">
                                                <p>Have any Questions?</p>
                                                <h5><a href="mailto:info@crysta.com">info@atozen.com</a></h5>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`}></div>
                </nav>
            </header>
        </>
    );
};

export default HeaderV5;