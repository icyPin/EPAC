
import React, { useState, useEffect } from 'react';
import HeaderCard from './cards/HeaderCard';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header id="header" className={`bg-header-bg/80 backdrop-blur-md shadow-lg fixed w-full z-50 top-0 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#hero" className="text-3xl font-bold accent-color">
                    EPAC
                    <span className="text-light-text-on-dark">BIT Mesra</span>
                </a>
                <nav className="hidden md:flex space-x-8 items-center">
                    <HeaderCard event={{ title: "Home" }} />
                    <HeaderCard event={{ title: "About Us" }} />
                    <HeaderCard event={{ title: "Events" }} />
                    <HeaderCard event={{ title: "Team" }} />
                    <HeaderCard event={{ title: "Gallery" }} />
                    <HeaderCard event={{ title: "Contact Us" }} />
                </nav>
                <button id="mobileMenuButton" className="md:hidden text-light-text-on-dark focus:outline-none" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div id="mobileMenu" className={`md:hidden ${isMenuOpen ? '' : 'hidden'} bg-header-bg/90 backdrop-blur-sm`}>
                <HeaderCard event={{ title: "Home" }} />
                    <HeaderCard event={{ title: "About Us" }} />
                    <HeaderCard event={{ title: "Events" }} />
                    <HeaderCard event={{ title: "Team" }} />
                    <HeaderCard event={{ title: "Gallery" }} />
                    <HeaderCard event={{ title: "Contact Us" }} />
            </div>
        </header>
    );
};

export default Header;
