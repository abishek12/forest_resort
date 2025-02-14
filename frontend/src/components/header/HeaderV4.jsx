import React from 'react';
import HeaderTopV1 from './HeaderTopV1';
import MainMenu from './MainMenu';
import HeaderSidebarMenu from './HeaderSidebarMenu';
import HeaderLogoV3 from './HeaderLogoV3';
import { useState } from 'react';
import { useEffect } from 'react';
import HeaderSearch from './HeaderSearch';

const HeaderV4 = ({ logoColor = false }) => {

    // Sticky Menu 
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
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

    // Search Bar
    const [openSearch, setOpenSearch] = useState(false);

    const searchOpen = (event) => {
        event.preventDefault();
        setOpenSearch(!openSearch)
    }

    const searchClose = () => {
        setOpenSearch(false)
    }

    // Sidebar Menu
    // eslint-disable-next-line no-unused-vars
    const [navbarClass, setNavbarClass] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const addClasses = () => {
        setNavbarClass(true);
        setIsSidebarOpen(true);
        document.body.classList.add('on-side');
    };

    const removeClasses = () => {
        setNavbarClass(false);
        setIsSidebarOpen(false);
        document.body.classList.remove('on-side');
    };

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
            <HeaderTopV1 />
            <header>
                <nav className={`navbar mobile-sidenav navbar-default validnavs dark ${isSticky ? "sticked" : "no-background"}`}>
                    <HeaderSearch openSearch={openSearch} searchClose={searchClose} />
                    <div className="container d-flex justify-content-between align-items-center">
                        <HeaderLogoV3 logoColor={logoColor} openMenu={openMenu} />
                        <MainMenu isOpen={isOpen} closeMenu={closeMenu} toggleSubMenu={toggleSubMenu} toggleMegaMenu={toggleMegaMenu} />
                        <HeaderSidebarMenu removeClasses={removeClasses} isSidebarOpen={isSidebarOpen} addClasses={addClasses} searchOpen={searchOpen} />
                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`}></div>
                </nav>
            </header>
        </>
    );
};

export default HeaderV4;